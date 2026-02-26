export async function load({ fetch, url }) {
    const res = await fetch('/recipes-data/index.json');
    const json = await res.json();

    return { recipes: json.recipes, base_url: url.origin };
}
