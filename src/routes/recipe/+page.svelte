<script lang="ts">
	import type { PageProps } from '../$types';
	import RecipeCard from '$lib/components/recipe-card.svelte';
	import Input from '$lib/components/ui/input/input.svelte';

	type Recipe = {
		title: string;
		thumbnail: string;
		slug: string;
		tags: string[];
	};

	let { data }: PageProps = $props();

	let recipes = $state(data.recipes);

	const search = (keyword: string) => {
		if (!keyword) {
			recipes = data.recipes;
		} else {
			recipes = data.recipes.filter((recipe: Recipe) =>
				recipe.title.toLowerCase().includes(keyword.toLowerCase())
			);
		}
	};
</script>

<main class="mx-5 flex flex-col items-center space-y-10 text-center md:space-y-15">
	<Input
		type="search"
		placeholder="keyword search"
		oninput={(e) => search((e.target as HTMLInputElement).value)}
		class="h-15 md:w-4xl"
	/>

	<div class="flex flex-row flex-wrap items-center justify-center gap-10 md:mx-15">
		{#each recipes as recipe (recipe.slug)}
			<RecipeCard thumbnail={recipe.thumbnail} title={recipe.title} slug={recipe.slug} />
		{/each}
	</div>
</main>
