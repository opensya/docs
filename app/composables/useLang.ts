import { content, type Lang } from '~/data/content'

export function useLang() {
  const lang = useCookie<Lang>('lang', { default: () => 'fr', maxAge: 60 * 60 * 24 * 365 })
  const t = computed(() => content[lang.value] ?? content.fr)

  useHead({ htmlAttrs: { lang: lang } })

  return { lang, t }
}
