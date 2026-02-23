<script lang="ts">
	import RecipeCard from '$lib/components/recipe-card.svelte';

	let { data } = $props();
</script>

<main class="mx-5 flex flex-col items-center space-y-10 text-center md:space-y-15">
	<div class="flex flex-col items-center gap-15 md:flex-row md:gap-25">
		<img src="/qtc-pic.jpg" alt="QTCinderella" width="512" class="rounded-full" />
		<div class="space-y-5">
			<h1 class="text-4xl font-bold text-pink-400">QTCinderella's Bake-a-longs</h1>
			<h2 class="pb-5 text-3xl text-pink-400 md:pb-20">More Bake-a-longs added everyday!</h2>
			<a href="/recipe" class="w-min rounded-4xl bg-pink-400 px-5 py-2 text-nowrap text-white"
				>Find a Recipe</a
			>
		</div>
	</div>

	<div class="grid gap-10 px-10 md:grid-cols-4">
		{#each data.recipes as recipe (recipe.slug)}
			<RecipeCard thumbnail={recipe.thumbnail} title={recipe.title} slug={recipe.slug} />
		{/each}
	</div>
</main>
