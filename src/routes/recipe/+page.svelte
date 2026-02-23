<script lang="ts">
	import type { PageProps } from '../$types';
	import RecipeCard from '$lib/components/recipe-card.svelte';

	let { data }: PageProps = $props();
</script>

<main class="mx-5 flex flex-col items-center space-y-10 text-center md:space-y-15">
	<div class="grid gap-10 px-10 md:grid-cols-4">
		{#each data.recipes as recipe (recipe.slug)}
			<RecipeCard thumbnail={recipe.thumbnail} title={recipe.title} slug={recipe.slug} />
		{/each}
	</div>
</main>
