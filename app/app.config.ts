export default defineAppConfig({
  colorMode: {
    preference: "light", // Options: 'dark', 'light', or 'system'
  },

  ui: {
    colorMode: {
      preference: "light", // Options: 'dark', 'light', or 'system'
    },

    colors: {
      primary: "blue",
      secondary: "purple",
      neutral: "neutral",
    },

    button: {
      variants: {
        size: {
          "2xl": {
            base: "gap-2.5 px-4 py-2.5 text-lg",
            leadingIcon: "size-6",
            trailingIcon: "size-6",
            leadingAvatarSize: "sm",
          },
          "3xl": {
            base: "gap-3 px-5 py-3 text-xl",
            leadingIcon: "size-7",
            trailingIcon: "size-7",
            leadingAvatarSize: "md",
          },
          "4xl": {
            base: "gap-4 px-6 py-4 text-2xl",
            leadingIcon: "size-8",
            trailingIcon: "size-8",
            leadingAvatarSize: "lg",
          },
        },
      },
      compoundVariants: [
        { size: "2xl", square: true, class: "p-2.5" },
        { size: "3xl", square: true, class: "p-3" },
        { size: "4xl", square: true, class: "p-4" },
      ],
    },
    card: {
      defaultVariants: {
        variant: "subtle",
      },
    },
    alert: {
      defaultVariants: {
        variant: "subtle",
      },
    },
    empty: {
      defaultVariants: {
        variant: "subtle",
      },
    },
  },
});
