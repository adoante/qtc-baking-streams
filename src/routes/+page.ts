export async function load({ fetch }) {
    const res = await fetch('/recipes/index.json');
    const json = await res.json();

    return { recipes: json.recipes };
}
