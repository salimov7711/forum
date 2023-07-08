import type { UseFetchOptions } from "nuxt/app";

export function useApiFetch<T>(path: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();
  let headers: any = {};
  const token = useCookie("XSRF-TOKEN");
  if (token.value) {
    headers["X-XSRF-TOKEN"] = token.value as string;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["referer", "cookie"]),
    };
  }
  return useFetch(`${config.public.BASE_URL}` + path, {
    credentials: "include",
    ...options,
    headers: { ...headers, ...options?.headers },
  });
}
