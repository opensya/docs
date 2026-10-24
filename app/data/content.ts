export type Lang = "fr" | "en";

export interface Plan {
  id: string;
  name: string;
  price: string;
  tagline: string;
  audience: string;
  includes: string[];
  examples: string;
  delivery: string;
  featured?: boolean;
}

export interface Content {
  nav: {
    promise: string;
    about: string;
    plans: string;
    rules: string;
    examples: string;
    cta: string;
    start: string;
  };
  hero: {
    kicker: string;
    title: [string, string, string];
    lead: string;
    cta: string;
    secondary: string;
    hours: string;
  };
  facts: { value: string; label: string }[];
  promise: {
    label: string;
    title: string;
    intro: string;
    steps: { n: string; title: string; text: string }[];
    never: string[];
    close: string;
  };
  about: {
    label: string;
    title: string;
    intro: string;
    points: { title: string; text: string }[];
    closing: string;
  };
  audience: {
    label: string;
    title: string;
    items: { title: string; text: string }[];
  };
  plans: {
    label: string;
    title: string;
    includes: string;
    examples: string;
    delivery: string;
    items: Plan[];
  };
  rules: {
    label: string;
    title: string;
    lead: string;
    conditions: string[];
    notes: string[];
  };
  examples: {
    label: string;
    title: string;
    problem: string;
    solution: string;
    rows: [string, string][];
    note: string;
  };
  scope: {
    label: string;
    title: string;
    excluded: string[];
    excludedNote: string;
    warrantyTitle: string;
    warranty: string[];
    warrantyNote: string;
    supportNote: string;
  };
  contact: {
    label: string;
    title: string;
    text: string;
    steps: string[];
    emailButton: string;
    /** Backward-compatible label for templates that still use contact.button. */
    button: string;
    emailNote: string;
    formButton: string;
    form: {
      title: string;
      intro: string;
      fields: {
        name: string;
        email: string;
        company: string;
        plan: string;
        problem: string;
      };
      placeholders: {
        name: string;
        email: string;
        company: string;
        problem: string;
      };
      planOptions: string[];
      submit: string;
      success: string;
      error: string;
      privacyNote: string;
    };
    closing: string;
  };
  footer: { text: string };
}

export const content: Record<Lang, Content> = {
  fr: {
    nav: {
      promise: "Promesse",
      about: "À propos de moi",
      plans: "Forfaits",
      rules: "Le délai",
      examples: "Exemples",
      cta: "Décrire mon besoin",
      start: "Démarrer",
    },
    hero: {
      kicker: "Automatisations sur mesure · Prix fixe",
      title: ["Un problème.", "Une solution.", "48 heures."],
      lead: "Vous décrivez la tâche qui vous fait perdre du temps. Je livre une automatisation qui fonctionne, à un prix annoncé d’avance, sous 48 heures.",
      cta: "Décrire mon besoin",
      secondary: "Voir les forfaits",
      hours: "48 h",
    },
    facts: [
      { value: "48 h", label: "Délai de livraison, en heures calendaires" },
      { value: "3", label: "Forfaits à prix fixe : 149 €, 299 € et 499 €" },
      {
        value: "7 j",
        label: "Garantie après livraison sur les défauts reproductibles",
      },
      { value: "0", label: "Surprise sur la facture ou sur le périmètre" },
    ],
    promise: {
      label: "01 — Promesse",
      title:
        "Arrêtez de perdre du temps sur des tâches que votre logiciel peut accomplir.",
      intro:
        "Copier des données entre vos outils, nettoyer des fichiers, générer le même rapport chaque semaine, faire dialoguer des systèmes qui s’ignorent : c’est du travail pour une machine. Je développe une solution ciblée qui automatise la tâche, connecte vos outils ou corrige le processus.",
      steps: [
        {
          n: "1",
          title: "Vous décrivez le problème",
          text: "La tâche, les outils concernés, le résultat souhaité.",
        },
        {
          n: "2",
          title: "Nous définissons le résultat",
          text: "Un périmètre écrit, un forfait, un prix. Rien d’implicite.",
        },
        {
          n: "3",
          title: "Je livre sous 48 heures",
          text: "Une solution fonctionnelle, son code source et son mode d’emploi.",
        },
      ],
      never: [
        "Pas de projet interminable.",
        "Pas de refonte inutile.",
        "Pas de facture imprévisible.",
      ],
      close: "Une mission courte, un périmètre convenu et un résultat concret.",
    },
    about: {
      label: "À propos",
      title:
        "Un développeur indépendant, impliqué du premier échange à la livraison.",
      intro:
        "Je suis développeur logiciel spécialisé dans l’écosystème JavaScript, avec une expertise particulière en TypeScript et Node.js. J’aide les entreprises à résoudre des problèmes techniques ciblés : automatiser des tâches répétitives, connecter des outils et fiabiliser des traitements de données.",
      points: [
        {
          title: "Un interlocuteur direct",
          text: "Vous échangez directement avec la personne qui conçoit et développe votre solution, du cadrage à la livraison.",
        },
        {
          title: "La bonne solution, pas la plus compliquée",
          text: "Je privilégie un périmètre clair, une implémentation pragmatique et du code que vous pourrez comprendre et maintenir.",
        },
        {
          title: "Une approche de développeur produit",
          text: "Je construis également des projets open source. Cette expérience nourrit mon attention à la qualité du code, à la maintenabilité et à l’expérience des utilisateurs.",
        },
      ],
      closing:
        "Mon objectif n’est pas de vous vendre un grand projet : c’est de résoudre un problème précis avec une solution utile et maîtrisable.",
    },
    audience: {
      label: "02 — Pour qui ?",
      title: "Pour ceux qui ont un problème précis, pas un projet de six mois.",
      items: [
        {
          title: "Petites entreprises et startups",
          text: "Automatiser une opération répétitive sans recruter un développeur à temps plein.",
        },
        {
          title: "Agences web et studios digitaux",
          text: "Obtenir une intégration API, un script ou un renfort technique ponctuel.",
        },
        {
          title: "Fondateurs de SaaS",
          text: "Résoudre un problème d’intégration ou livrer vite une fonctionnalité secondaire.",
        },
        {
          title: "Consultants et équipes opérationnelles",
          text: "Arrêter de manipuler à la main des fichiers, des données et plusieurs logiciels.",
        },
      ],
    },
    plans: {
      label: "Forfaits",
      title: "Trois forfaits. Un prix. Pas de devis à rallonge.",
      includes: "Inclus",
      examples: "Exemples",
      delivery: "Livraison",
      items: [
        {
          id: "essential",
          name: "Sprint Essential",
          price: "149 €",
          tagline: "Une tâche. Un outil. Un résultat.",
          audience: "Pour les besoins techniques simples et bien définis.",
          includes: [
            "Un script ou un traitement automatisé",
            "Une seule source de données et un résultat clairement défini",
            "Validation des entrées et gestion élémentaire des erreurs",
            "Le code source et les instructions d’utilisation",
            "Une petite correction conforme au périmètre initial",
          ],
          examples:
            "Nettoyer un fichier CSV, transformer un fichier JSON, générer un rapport depuis des données existantes, automatiser un traitement de fichiers.",
          delivery:
            "Sous 48 heures après validation du périmètre et réception de tous les accès et éléments nécessaires.",
        },
        {
          id: "workflow",
          name: "Sprint Workflow",
          price: "299 €",
          tagline: "Connectez vos outils. Éliminez une opération manuelle.",
          audience:
            "Pour automatiser un processus métier simple de bout en bout.",
          featured: true,
          includes: [
            "Un workflow complet",
            "Deux systèmes au maximum",
            "Un déclencheur, un traitement et une action de sortie",
            "Validation des données et gestion des erreurs courantes",
            "Tests sur des exemples représentatifs",
            "Code source, documentation courte et une correction mineure",
          ],
          examples:
            "Envoyer les données d’un formulaire vers un CRM, synchroniser une API avec Google Sheets, générer et envoyer un rapport à partir d’un fichier.",
          delivery:
            "Sous 48 heures après validation du périmètre et réception de tous les accès et éléments nécessaires.",
        },
        {
          id: "integration",
          name: "Sprint Integration",
          price: "499 €",
          tagline:
            "Une intégration technique sur mesure, sans projet interminable.",
          audience:
            "Pour les intégrations nécessitant plus de logique ou plusieurs systèmes.",
          includes: [
            "Un workflow métier clairement délimité",
            "Jusqu’à trois systèmes, ou une intégration API personnalisée de complexité comparable",
            "Authentification API, webhooks ou traitement de données selon les besoins",
            "Validation, gestion des erreurs et journalisation élémentaire",
            "Tests sur un environnement de validation lorsqu’il est disponible",
            "Documentation de mise en service et transfert technique",
            "Une correction mineure conforme au périmètre convenu",
          ],
          examples:
            "Synchroniser des données entre trois outils, automatiser le traitement de commandes, connecter une API métier à un système existant.",
          delivery:
            "Sous 72 heures lorsque la complexité a été validée avant le démarrage.",
        },
      ],
    },
    rules: {
      label: "Le délai",
      title: "Ce que signifie réellement « livré sous 48 heures ».",
      lead: "Le chronomètre démarre lorsque les quatre conditions suivantes sont réunies :",
      conditions: [
        "Le besoin et le résultat attendu sont validés par écrit.",
        "Le forfait et le prix sont acceptés.",
        "Le paiement initial convenu est reçu, ou le financement de la mission est sécurisé sur la plateforme utilisée.",
        "Les accès API, les données de test et les autorisations nécessaires sont disponibles.",
      ],
      notes: [
        "Le délai correspond à 48 heures calendaires. Il est suspendu si une information, une validation ou une intervention indispensable du client ou d’un prestataire externe manque.",
        "Une modification du périmètre, une API indisponible ou une demande de nouvelle fonctionnalité ne fait pas partie de la livraison initiale.",
        "Si un besoin dépasse deux jours de travail raisonnable, il est réduit à un premier résultat utile ou fait l’objet d’un devis distinct.",
      ],
    },
    examples: {
      label: "Exemples",
      title: "Des problèmes du quotidien, des solutions précises.",
      problem: "Problème rencontré",
      solution: "Solution proposée",
      rows: [
        [
          "Un commercial copie manuellement les prospects d’un formulaire vers un CRM.",
          "Synchronisation automatique avec validation des données.",
        ],
        [
          "Une équipe perd du temps à nettoyer des fichiers CSV reçus de fournisseurs.",
          "Script de validation, correction des formats et export normalisé.",
        ],
        [
          "Une API doit alimenter régulièrement un tableau de suivi.",
          "Synchronisation entre l’API et un tableur.",
        ],
        [
          "Une équipe doit générer chaque semaine le même rapport.",
          "Génération automatisée du rapport à partir des données fournies.",
        ],
        [
          "Un webhook échoue sans alerter personne.",
          "Journalisation et notification des échecs, avec reprise simple si possible.",
        ],
        [
          "Une agence doit connecter deux outils sans intégration prête à l’emploi.",
          "Adaptateur API sur mesure.",
        ],
      ],
      note: "Chaque mission fait l’objet d’une validation technique préalable. La disponibilité des API, les quotas, les droits d’accès et la qualité des données peuvent modifier le périmètre.",
    },
    scope: {
      label: "Limites et garantie",
      title: "Des limites annoncées d’avance. Une garantie simple.",
      excluded: [
        "Le développement d’une application complète ou d’un SaaS",
        "La refonte d’une architecture existante",
        "Les migrations de bases de données complexes",
        "Les intégrations reposant sur une API indisponible ou non documentée, sans solution de remplacement validée",
        "Les projets dépendant de données ou d’autorisations non fournies",
        "Les agents d’IA complexes, systèmes autonomes à haut risque ou infrastructures de production critiques",
        "L’hébergement, les abonnements tiers et les frais d’API payantes",
        "Les demandes supplémentaires apparues après validation du périmètre",
      ],
      excludedNote:
        "Ces projets peuvent être étudiés séparément, mais ne bénéficient pas automatiquement du délai de 48 heures.",
      warrantyTitle: "Chaque livraison comprend",
      warranty: [
        "Une documentation concise expliquant comment exécuter la solution",
        "Sept jours calendaires après livraison pour signaler et corriger les défauts reproductibles qui empêchent le fonctionnement convenu",
        "Une correction mineure du périmètre initial avant la clôture de la mission",
      ],
      warrantyNote:
        "La garantie ne couvre pas les nouvelles fonctionnalités, les changements d’API d’un fournisseur, les modifications de l’environnement client, les incidents externes ou une assistance illimitée.",
      supportNote:
        "Support continu, surveillance, astreinte et évolutions : contrat distinct.",
    },
    contact: {
      label: "Démarrer",
      title: "Un problème précis mérite une solution précise.",
      text: "Choisissez la façon qui vous convient : envoyez-moi un e-mail ou décrivez votre besoin dans le formulaire.",
      steps: [
        "Je vérifie si votre besoin entre dans le périmètre d’Automation Sprint.",
        "Je vous recommande le forfait adapté et précise les éléments nécessaires au démarrage.",
        "Vous connaissez le périmètre et le prix avant de vous engager.",
      ],
      emailButton: "Envoyer un e-mail",
      button: "Envoyer un e-mail",
      emailNote: "Vous préférez votre messagerie ? Écrivez-moi directement.",
      formButton: "Remplir le formulaire",
      form: {
        title: "Décrivez votre besoin",
        intro:
          "Quelques informations suffisent pour que je comprenne le problème et vous réponde avec les prochaines étapes.",
        fields: {
          name: "Votre nom",
          email: "Votre adresse e-mail",
          company: "Entreprise ou site web (facultatif)",
          plan: "Forfait envisagé",
          problem: "Quel problème souhaitez-vous résoudre ?",
        },
        placeholders: {
          name: "Nom et prénom",
          email: "vous@entreprise.com",
          company: "Nom de l’entreprise ou URL du site",
          problem:
            "Les tâches concernées, les outils utilisés et le résultat attendu…",
        },
        planOptions: [
          "Je ne sais pas encore",
          "Sprint Essential — 149 €",
          "Sprint Workflow — 299 €",
          "Sprint Integration — 499 €",
        ],
        submit: "Envoyer ma demande",
        success:
          "Votre demande a bien été envoyée. Je reviendrai vers vous dès que possible.",
        error:
          "L’envoi a échoué. Réessayez ou contactez-moi directement par e-mail.",
        privacyNote:
          "Vos informations servent uniquement à répondre à votre demande. N’envoyez pas de mots de passe ni de clés API dans ce formulaire.",
      },
      closing: "Aucun engagement avant validation du périmètre et du prix.",
    },
    footer: {
      text: "Automation Sprint — Un problème. Une solution. Livrée en 48 heures.",
    },
  },
  en: {
    nav: {
      promise: "Promise",
      about: "About me",
      plans: "Packages",
      rules: "The clock",
      examples: "Examples",
      cta: "Describe my need",
      start: "Start",
    },
    hero: {
      kicker: "Custom automation · Fixed price",
      title: ["One problem.", "One solution.", "48 hours."],
      lead: "You describe the task that eats your time. I deliver a working automation, at a price agreed upfront, within 48 hours.",
      cta: "Describe my need",
      secondary: "See packages",
      hours: "48 h",
    },
    facts: [
      {
        value: "48 h",
        label: "Delivery window, in consecutive calendar hours",
      },
      { value: "3", label: "Fixed-price packages: €149, €299 and €499" },
      { value: "7 d", label: "Post-delivery warranty on reproducible defects" },
      { value: "0", label: "Surprises on the invoice or the scope" },
    ],
    promise: {
      label: "01 — Promise",
      title: "Stop spending time on tasks your software should handle.",
      intro:
        "Copying data between tools, cleaning spreadsheets, generating the same report every week, making systems talk to each other: that is machine work. I build a focused solution that automates the task, connects your tools, or fixes the process.",
      steps: [
        {
          n: "1",
          title: "You explain the problem",
          text: "The task, the tools involved, the outcome you need.",
        },
        {
          n: "2",
          title: "We agree on the outcome",
          text: "A written scope, a package, a price. Nothing implicit.",
        },
        {
          n: "3",
          title: "I deliver within 48 hours",
          text: "A working solution, its source code and usage instructions.",
        },
      ],
      never: [
        "No never-ending project.",
        "No unnecessary rebuild.",
        "No unpredictable scope.",
      ],
      close:
        "One clearly defined task, one agreed deliverable, a practical result.",
    },
    about: {
      label: "About me",
      title:
        "An independent developer, involved from the first conversation to delivery.",
      intro:
        "I'm a software developer focused on the JavaScript ecosystem, with particular expertise in TypeScript and Node.js. I help businesses solve specific technical problems: automating repetitive tasks, connecting tools, and making data workflows more reliable.",
      points: [
        {
          title: "Direct collaboration",
          text: "You work directly with the person designing and building your solution, from scoping to delivery.",
        },
        {
          title: "The right solution, not the most complicated one",
          text: "I focus on a clear scope, a pragmatic implementation, and code you can understand and maintain.",
        },
        {
          title: "A product-minded developer",
          text: "I also build open-source projects. That experience shapes how I approach code quality, maintainability, and user experience.",
        },
      ],
      closing:
        "My goal isn't to sell you a large project. It's to solve a specific problem with a useful, maintainable solution.",
    },
    audience: {
      label: "02 — Who is it for?",
      title: "For people with a specific problem, not a six-month project.",
      items: [
        {
          title: "Small businesses and startups",
          text: "Automate repetitive operations without hiring a full-time developer.",
        },
        {
          title: "Web agencies and digital studios",
          text: "Get a quick API integration, script, or technical implementation.",
        },
        {
          title: "SaaS founders",
          text: "Solve an integration problem or ship a supporting feature fast.",
        },
        {
          title: "Consultants and operations teams",
          text: "Stop handling recurring reports, spreadsheets, and disconnected tools by hand.",
        },
      ],
    },
    plans: {
      label: "Packages",
      title: "Three packages. One price. No endless quote.",
      includes: "Includes",
      examples: "Examples",
      delivery: "Delivery",
      items: [
        {
          id: "essential",
          name: "Sprint Essential",
          price: "€149",
          tagline: "One task. One tool. One result.",
          audience: "For small, clearly defined technical tasks.",
          includes: [
            "One script or automated data-processing task",
            "One data source and one clearly defined output",
            "Input validation and basic error handling",
            "Source code and usage instructions",
            "One minor correction within the agreed scope",
          ],
          examples:
            "Cleaning CSV files, transforming JSON data, generating a report from existing data, automating file processing.",
          delivery:
            "Within 48 hours after scope approval and receipt of all required access and materials.",
        },
        {
          id: "workflow",
          name: "Sprint Workflow",
          price: "€299",
          tagline: "Connect your tools. Eliminate manual work.",
          audience: "For one simple end-to-end business workflow.",
          featured: true,
          includes: [
            "One complete workflow",
            "Up to two systems",
            "One trigger, one processing step, and one output action",
            "Data validation and common error handling",
            "Tests using representative examples",
            "Source code, concise documentation, and one minor correction",
          ],
          examples:
            "Sending form submissions to a CRM, syncing an API with Google Sheets, generating and sending a report from a data file.",
          delivery:
            "Within 48 hours after scope approval and receipt of all required access and materials.",
        },
        {
          id: "integration",
          name: "Sprint Integration",
          price: "€499",
          tagline:
            "Custom technical integration without a never-ending project.",
          audience:
            "For workflows requiring additional logic or multiple systems.",
          includes: [
            "One clearly scoped business workflow",
            "Up to three systems, or one custom API integration of comparable complexity",
            "API authentication, webhooks, or data processing as required",
            "Input validation, error handling, and basic logging",
            "Tests in a staging environment when available",
            "Deployment instructions and technical handover",
            "One minor correction within the agreed scope",
          ],
          examples:
            "Synchronizing data across three tools, automating order processing, connecting a business API to an existing application.",
          delivery:
            "Within 48 hours, provided the scope has been reviewed and approved before work begins.",
        },
      ],
    },
    rules: {
      label: "The clock",
      title: "What “delivered within 48 hours” actually means.",
      lead: "The clock starts when all four conditions are met:",
      conditions: [
        "The requested outcome and scope are approved in writing.",
        "The selected package and price are accepted.",
        "The agreed upfront payment is received, or the project is funded through the selected platform.",
        "Required API credentials, test data, and permissions are available.",
      ],
      notes: [
        "The window is 48 consecutive calendar hours. It pauses when essential information, client approval, or an external dependency prevents work from proceeding.",
        "Scope changes, unavailable APIs, and additional features are not included in the original delivery.",
        "If a request requires more than two reasonable working days, it is reduced to a useful first deliverable or quoted separately.",
      ],
    },
    examples: {
      label: "Examples",
      title: "Everyday problems, precise solutions.",
      problem: "Business problem",
      solution: "Proposed solution",
      rows: [
        [
          "Sales staff manually copy leads into their CRM.",
          "Automated synchronization with data validation.",
        ],
        [
          "Supplier CSV files require repetitive manual cleanup.",
          "Data validation, format normalization, and clean exports.",
        ],
        [
          "An API must regularly update an operations spreadsheet.",
          "Scheduled API-to-spreadsheet synchronization.",
        ],
        [
          "A team generates the same report every week.",
          "Automated report generation from existing data.",
        ],
        [
          "Webhook failures go unnoticed.",
          "Error logging and notifications, with basic retries where appropriate.",
        ],
        [
          "An agency needs to connect two tools without a ready-made integration.",
          "A custom API adapter.",
        ],
      ],
      note: "Every engagement is technically assessed before work begins. API availability, quotas, permissions, and data quality may affect the final scope.",
    },
    scope: {
      label: "Limits and warranty",
      title: "Limits stated upfront. A simple warranty.",
      excluded: [
        "Full application or SaaS development",
        "Major architecture changes or rewrites",
        "Complex database migrations",
        "Integrations that depend on unavailable or undocumented APIs without an agreed alternative",
        "Work blocked by missing client data, credentials, or permissions",
        "Complex AI agents, high-risk autonomous systems, or critical production infrastructure",
        "Hosting, third-party subscriptions, and paid API usage",
        "Additional features requested after scope approval",
      ],
      excludedNote:
        "These requirements can be assessed separately, but are not automatically covered by the 48-hour commitment.",
      warrantyTitle: "Every delivery includes",
      warranty: [
        "Concise instructions explaining how to run the solution",
        "Seven calendar days after delivery to report and fix reproducible defects that prevent the agreed functionality from working",
        "One minor correction within the original scope before the engagement is closed",
      ],
      warrantyNote:
        "The warranty does not cover new features, third-party API changes, changes to the client’s environment, external service outages, or unlimited troubleshooting.",
      supportNote:
        "Ongoing support, monitoring, on-call availability, and future improvements: separate agreement.",
    },
    contact: {
      label: "Get started",
      title: "A specific problem deserves a specific solution.",
      text: "Choose whichever works best for you: send me an email or describe your needs in the form.",
      steps: [
        "I check whether your request fits Automation Sprint.",
        "I recommend the right package and clarify the prerequisites.",
        "You know the scope and price before making a commitment.",
      ],
      emailButton: "Send an email",
      button: "Send an email",
      emailNote: "Prefer your email app? Contact me directly.",
      formButton: "Fill out the form",
      form: {
        title: "Tell me what you need",
        intro:
          "A few details are enough for me to understand the problem and reply with the next steps.",
        fields: {
          name: "Your name",
          email: "Your email address",
          company: "Company or website (optional)",
          plan: "Package you're considering",
          problem: "What problem would you like to solve?",
        },
        placeholders: {
          name: "Full name",
          email: "you@company.com",
          company: "Company name or website URL",
          problem: "The task, tools involved, and outcome you need…",
        },
        planOptions: [
          "Not sure yet",
          "Sprint Essential — €149",
          "Sprint Workflow — €299",
          "Sprint Integration — €499",
        ],
        submit: "Send my request",
        success:
          "Your request has been sent. I'll get back to you as soon as possible.",
        error:
          "Your message couldn't be sent. Please try again or contact me directly by email.",
        privacyNote:
          "Your information will only be used to respond to your request. Do not include passwords or API keys in this form.",
      },
      closing: "No commitment until the scope and price have been agreed.",
    },
    footer: {
      text: "Automation Sprint — One problem. One solution. Delivered in 48 hours.",
    },
  },
};
