export default defineNuxtPlugin(async () => {
  const { data: docs } = await useAsyncData('docs-navigation', () =>
    queryCollectionNavigation('docs'),
  );

  const { data: persistence } = await useAsyncData(
    'persistence-navigation',
    () => queryCollectionNavigation('persistence'),
  );

  return {
    provide: {
      navigation: { docs, persistence },
    },
  };
});
