import { Resend } from "resend";

interface ContactBody {
  name?: string;
  email?: string;
  plan?: string;
  tools?: string;
  message?: string;
  website?: string;
  lang?: string;
}

type Lang = "fr" | "en";

const FROM = "Automation Sprint <automation-sprint@opensya.com>";

const PLANS: Record<string, string> = {
  unsure: "Not sure yet",
  essential: "Sprint Essential (149 €)",
  workflow: "Sprint Workflow (299 €)",
  integration: "Sprint Integration (499 €)",
};

const CONFIRMATION: Record<
  Lang,
  {
    subject: string;
    preheader: string;
    hello: (name: string) => string;
    intro: string;
    recap: string;
    next: string;
    signoff: string;
  }
> = {
  fr: {
    subject: "Votre demande Automation Sprint est bien reçue",
    preheader:
      "Réponse avec le périmètre et le forfait adapté avant tout engagement.",
    hello: (n) => `Bonjour ${n},`,
    intro: "J’ai bien reçu votre demande. Voici ce que vous m’avez envoyé :",
    recap: "Récapitulatif",
    next: "Je vous réponds avec le périmètre et le forfait adapté avant tout engagement. Vous pouvez répondre directement à cet e-mail pour ajouter une précision.",
    signoff: "Un problème. Une solution. Livrée en 48 heures.",
  },
  en: {
    subject: "Your Automation Sprint request has been received",
    preheader:
      "You'll get the scope and the right package before any commitment.",
    hello: (n) => `Hi ${n},`,
    intro: "I’ve received your request. Here is what you sent me:",
    recap: "Summary",
    next: "I’ll reply with the scope and the right package before any commitment. You can reply directly to this email to add details.",
    signoff: "One problem. One solution. Delivered in 48 hours.",
  },
};

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const oneLine = (v: string) => v.replace(/[\r\n]+/g, " ");

const escapeHtml = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const row = (label: string, value: string) =>
  `<tr><td style="padding:4px 16px 4px 0;color:#666">${label}</td><td style="padding:4px 0"><strong>${escapeHtml(value)}</strong></td></tr>`;

const wrap = (inner: string) =>
  `<div style="font:15px/1.6 system-ui,sans-serif;color:#111;max-width:560px">${inner}</div>`;

async function renderTemplate(name: string, vars: Record<string, string>) {
  const tpl = await useStorage("assets:templates").getItem<string>(name);
  if (typeof tpl !== "string") throw new Error(`Template not found: ${name}`);
  return Object.entries(vars).reduce(
    (out, [key, value]) => out.replaceAll(`{{${key}}}`, () => value),
    tpl,
  );
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event);

  if (clean(body?.website, 100)) return { ok: true };

  const name = clean(body?.name, 100);
  const email = clean(body?.email, 200);
  const tools = clean(body?.tools, 300);
  const message = clean(body?.message, 5000);
  const plan = PLANS[clean(body?.plan, 20)] ?? PLANS.unsure!;
  const lang: Lang = body?.lang === "en" ? "en" : "fr";

  if (
    !name ||
    !tools ||
    message.length < 20 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    throw createError({ statusCode: 400, statusMessage: "Invalid payload" });
  }

  const config = useRuntimeConfig(event);
  const { resendApiKey } = config;
  const to = config.public.contactEmail;

  if (!resendApiKey || !to) {
    console.error("[contact] Missing resendApiKey or contactEmail");
    throw createError({
      statusCode: 500,
      statusMessage: "Mail not configured",
    });
  }

  const resend = new Resend(resendApiKey);

  const notification = await resend.emails.send({
    from: FROM,
    to: [to],
    replyTo: email,
    subject: oneLine(`[Automation Sprint] ${plan} — ${name}`),
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Package: ${plan}`,
      `Tools: ${tools}`,
      `Language: ${lang}`,
      "",
      message,
    ].join("\n"),
    html: wrap(`
      <table style="border-collapse:collapse">
        ${row("Name", name)}
        ${row("Email", email)}
        ${row("Package", plan)}
        ${row("Tools", tools)}
        ${row("Language", lang)}
      </table>
      <p style="white-space:pre-wrap;margin-top:20px">${escapeHtml(message)}</p>
    `),
  });

  if (notification.error) {
    console.error("[contact] Resend error", notification.error);
    throw createError({
      statusCode: 502,
      statusMessage: "Mail provider error",
    });
  }

  const c = CONFIRMATION[lang];

  const content = [
    escapeHtml(c.hello(name)),
    "<br><br>",
    escapeHtml(c.intro),
    `<br><br><strong>Package</strong> ${escapeHtml(plan)}<br><strong>Tools</strong> ${escapeHtml(tools)}`,
    `<span style="display:block;margin:16px 0;padding:12px 16px;border-left:4px solid #211d1e;background:#f7f6f5;white-space:pre-wrap">${escapeHtml(message)}</span>`,
    escapeHtml(c.next),
    `<br><br><span style="opacity:.5">${escapeHtml(c.signoff)}</span>`,
  ].join("");

  let confirmationHtml: string;
  try {
    confirmationHtml = await renderTemplate("confirmation.html", {
      TITLE: escapeHtml(c.preheader),
      CONTENT: content,
    });
  } catch (err) {
    console.error("[contact] Template error, using fallback", err);
    confirmationHtml = wrap(content);
  }

  const confirmation = await resend.emails.send({
    from: FROM,
    to: [email],
    replyTo: to,
    subject: c.subject,
    text: [
      c.hello(name),
      "",
      c.intro,
      "",
      `${c.recap}`,
      `- Package: ${plan}`,
      `- Tools: ${tools}`,
      "",
      message,
      "",
      c.next,
      "",
      c.signoff,
    ].join("\n"),
    html: confirmationHtml,
  });

  if (confirmation.error) {
    console.error("[contact] Confirmation email failed", confirmation.error);
  }

  return { ok: true };
});
