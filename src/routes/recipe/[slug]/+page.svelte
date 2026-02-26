<script lang="ts">
	import type { PageProps } from './$types';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { Card, Content, Header } from '$lib/components/ui/card';

	let { data }: PageProps = $props();
	let recipe = data.recipe;
</script>

<svelte:head>
	<meta property="og:title" content={recipe.title} />
	<meta name="twitter:description" content="QTCinderella's Cookbook Recipes and Bake-a-longs!" />
	<meta property="og:image" content={data.ogImage} />
	<meta property="og:type" content="article" />
	<meta property="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="mx-auto flex w-full max-w-7xl flex-col justify-center space-y-10 p-5">
	<!-- Title and thumbnail -->
	<h1 class="text-center text-4xl font-bold text-pink-400">{recipe.title}</h1>

	<div class="flex flex-col items-center justify-center gap-10">
		<Card class="justify-center rounded-none border-none text-center">
			<Content>
				<img src={recipe.thumbnail} alt={recipe.title} class="w-100" />
			</Content>
			<Header>
				<p>Image provided by {recipe.thumbnail_credit}</p>
			</Header>
		</Card>

		<!-- Video -->
		{#if recipe.video?.url}
			{#if recipe.video.platform == 'Twitch'}
				<div class="mx-auto w-full max-w-4xl">
					<div
						class="relative w-full overflow-hidden rounded-xl bg-black shadow-sm"
						style="padding-top: 56.25%;"
					>
						<iframe
							class="absolute inset-0 h-full w-full"
							src={recipe.video.url}
							frameborder="0"
							allowfullscreen
							scrolling="no"
							title="Twitch video player"
						></iframe>
					</div>
				</div>
			{:else}
				<div class="mx-auto w-full max-w-4xl">
					<div
						class="relative w-full overflow-hidden rounded-xl bg-black shadow-sm"
						style="padding-top: 56.25%;"
					>
						<iframe
							class="absolute inset-0 h-full w-full"
							src={recipe.video.url}
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
						></iframe>
					</div>
				</div>
			{/if}
		{/if}
	</div>

	<!-- Components (like dough, frosting) -->
	{#each recipe.components as component (component.id)}
		<section class="space-y-6">
			<h2 class="text-3xl text-pink-400">{component.name}</h2>

			<!-- Ingredients -->
			<h3 class="text-2xl text-pink-500">Ingredients</h3>
			<div class="flex flex-col gap-2">
				{#each component.ingredients as ing (ing.name)}
					<div
						class="flex flex-row items-center rounded-xl bg-pink-300 pl-4 hover:bg-pink-500 md:w-1/2"
					>
						<Checkbox id={`${component.name}-${ing.name}`} class="cursor-pointer" />
						<Label for={`${component.name}-${ing.name}`} class="w-full cursor-pointer py-3 pl-3">
							{ing.quantity}
							{ing.unit}
							{ing.name}
							{#if ing.notes}
								— <em>{ing.notes}</em>{/if}
						</Label>
					</div>
				{/each}
			</div>

			<!-- Instructions --->
			{#if recipe.instructions?.length}
				<h3 class="text-2xl text-pink-500">Instructions</h3>
				<ol class="space-y-4">
					{#each component.instructions as step, i (i)}
						<li>
							<h4 class="text-xl text-pink-600">{step.title}</h4>
							<ul>
								{#each step.actions as action (action)}
									<li class="ml-6 list-disc leading-relaxed">
										{action}
									</li>
								{/each}
							</ul>
						</li>
					{/each}
				</ol>
			{/if}
		</section>
	{/each}

	<!-- Tools -->
	{#if recipe.tools?.length}
		<section class="space-y-6">
			<h2 class="text-3xl text-pink-400">Tools</h2>
			<div class="flex flex-col gap-2">
				{#each recipe.tools as tool (tool)}
					<div
						class="flex cursor-pointer flex-row items-center rounded-xl bg-pink-300 pl-4 hover:bg-pink-400 md:w-1/2"
					>
						<Checkbox id={tool.name} />
						<Label for={tool.name} class="w-full cursor-pointer py-3 pl-3">
							{tool.name}
							{tool.optional ? ' (optonal)' : ''}
						</Label>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Notes -->
	{#if recipe.notes?.length}
		<section>
			<h3 class="text-2xl text-pink-500">Notes</h3>
			<ul>
				{#each recipe.notes as note (note)}
					<li class="ml-6 list-disc leading-relaxed">
						{note}
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</main>
