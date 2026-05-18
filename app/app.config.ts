export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral',
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted',
      },
    },

    prose: {
      pre: {
        base: 'bg-transparent rounded-xl',
      },
    },
  },
  seo: {
    siteName: 'Nuxt Docs Template',
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/opensya',
        target: '_blank',
        'aria-label': 'GitHub',
      },
    ],
  },
  footer: {
    credits: `© ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        icon: 'i-simple-icons-linkedin',
        to: 'https://go.opensya.com/linkedin',
        target: '_blank',
        'aria-label': 'Opensya on LinkedIN',
      },
      {
        icon: 'i-simple-icons-bluesky',
        to: 'https://go.opensya.com/bluesky',
        target: '_blank',
        'aria-label': 'Opensya on BlueSky',
      },
      {
        icon: 'i-simple-icons-x',
        to: 'https://go.opensya.com/x',
        target: '_blank',
        'aria-label': 'Opensya on X',
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/opensya',
        target: '_blank',
        'aria-label': 'Opensya on GitHub',
      },
    ],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/opensya/docs/edit/main/content',
      issue: ' https://github.com/opensya/core/issues/new/choose',

      links: [
        {
          icon: 'i-lucide-star',
          label: 'Star on GitHub',
          to: 'https://github.com/nuxt/ui',
          target: '_blank',
        },
        // {
        //   icon: 'i-lucide-book-open',
        //   label: 'Nuxt UI docs',
        //   to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
        //   target: '_blank',
        // },
      ],
    },
  },
});
