export const use$fetch = (url, options) => {
  const config = useRuntimeConfig();

  return $fetch(url, {
    baseURL: config.public.BASE_URL,

    ...options,
  });
};
