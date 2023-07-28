import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();
  let headers: any = {};

  return useFetch(`${config.public.BASE_URL}` + path, {
    // credentials: "include",
    ...options,
    headers: {
      Accept: "application/json",
      ...headers,
      ...options?.headers,
    },
  });
}
