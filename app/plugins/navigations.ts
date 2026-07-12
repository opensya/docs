export default defineNuxtPlugin(async () => {
  const { data: docs } = await useAsyncData('docs-navigation', () =>
    queryCollectionNavigation('docs'),
  );

  return {
    provide: {
      navigation: { docs },
    },
  };
});
