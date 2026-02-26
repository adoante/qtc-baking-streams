import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, fetch, url }) => {
    const res = await fetch(`/recipes-data/${params.slug}.json`);
    const json = await res.json();

    return { recipe: json, ogImage: `${url.origin}/recipe/${params.slug}/og.png`};
}
