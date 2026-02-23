import type { PageLoad } from './$types'

export const load: PageLoad = async ({  fetch }) => {
    const res = await fetch(`/recipes-data/index.json`);
    const json = await res.json();

    return { recipes: json.recipes }
}
