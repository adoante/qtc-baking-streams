<script lang="ts">
	import RecipeCard from '$lib/components/recipe-card.svelte';

	let { data } = $props();

	const recipes = data.recipes;
</script>

<main class="mx-auto flex max-w-6xl flex-col space-y-10 md:space-y-15">
	<h1 class="text-center text-4xl font-bold text-pink-400">Recipes</h1>

	<div class="grid gap-10 px-10 md:grid-cols-4">
		{#each recipes as recipe (recipe.slug)}
			<RecipeCard thumbnail={recipe.thumbnail} title={recipe.title} slug={recipe.slug} />
		{/each}
	</div>
</main>
