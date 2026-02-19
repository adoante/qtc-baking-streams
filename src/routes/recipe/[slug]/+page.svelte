<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let recipe = data.recipe;
</script>

<main class="mx-auto flex w-full max-w-6xl flex-col justify-center space-y-10 p-5">
	<!-- Title and thumbnail -->
	<h1 class="text-center text-4xl font-bold text-pink-400">{recipe.title}</h1>

	<div class="flex flex-col items-center justify-center gap-10 md:flex-row">
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

		<div class="text-center">
			<img src={recipe.thumbnail} alt={recipe.title} width="300" />
			<p>Image provided by {recipe.thumbnail_credit}</p>
		</div>
	</div>

	<!-- Components (like dough, frosting) -->
	{#each recipe.components as component (component.id)}
		<section class="space-y-6">
			<h2 class="text-3xl text-pink-400">{component.name}</h2>

			<!-- Ingredients -->
			<h3 class="text-2xl text-pink-500">Ingredients</h3>
			<ul>
				{#each component.ingredients as ing (ing.name)}
					<li class="ml-6 list-disc leading-relaxed">
						{ing.quantity}
						{ing.unit}
						{ing.name}
						{#if ing.notes}
							— <em>{ing.notes}</em>{/if}
					</li>
				{/each}
			</ul>

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
		<section>
			<h3 class="text-2xl text-pink-500">Tools</h3>
			<ul>
				{#each recipe.tools as tool (tool)}
					<li class="ml-6 list-disc leading-relaxed">
						{tool.name}{tool.optional ? ' (optional)' : ''}
					</li>
				{/each}
			</ul>
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
