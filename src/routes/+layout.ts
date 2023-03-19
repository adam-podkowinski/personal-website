export const prerender = true;

import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async (params) => {
  return { pathname: params.url.pathname };
};
