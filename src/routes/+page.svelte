<script lang="ts">
	import RecipeCard from '$lib/components/recipe-card.svelte';
	import { motion } from '@humanspeak/svelte-motion';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	let { data } = $props();
</script>

<main class="mx-5 flex flex-col items-center space-y-10 text-center md:space-y-25">
	<div class="flex flex-col items-center gap-15 md:flex-row md:gap-25">
		<img src="/qtc-pic.jpg" alt="QTCinderella" width="512" class="rounded-full" />

		<div class="space-y-5">
			<h1 class="text-4xl font-bold text-pink-400">QTCinderella's Bake-a-longs</h1>
			<h2 class="pb-5 text-3xl text-pink-400 md:pb-20">More Bake-a-longs added everyday!</h2>
			<a
				href="/recipe"
				class="w-min rounded-4xl bg-pink-400 px-5 py-2 text-nowrap text-white hover:bg-pink-300"
				>Find a Recipe</a
			>
		</div>
	</div>

	<Carousel.Root class="w-full max-w-sm md:max-w-4xl">
		<Carousel.Content>
			{#each data.recipes as recipe (recipe.slug)}
				<Carousel.Item class="md:basis-1/2">
					<RecipeCard thumbnail={recipe.thumbnail} title={recipe.title} slug={recipe.slug} />
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</main>
