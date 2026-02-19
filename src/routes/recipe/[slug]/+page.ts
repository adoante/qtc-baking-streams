import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, fetch }) => {
    const res = await fetch(`/recipes/${params.slug}.json`);
    const json = await res.json();

    return { recipe: json };
}
