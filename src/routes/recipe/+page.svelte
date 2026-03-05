<script lang="ts">
	import type { PageProps } from '../$types';
	import RecipeCard from '$lib/components/recipe-card.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { motion } from '@humanspeak/svelte-motion';
	import * as Select from '$lib/components/ui/select/index';

	type RecipeDate = {
		epoch: number;
		humanReadable: string;
	};

	type Recipe = {
		title: string;
		thumbnail: string;
		slug: string;
		tags: string[];
		date: RecipeDate;
	};

	let { data }: PageProps = $props();
	let recipes: Recipe[] = $state(data.recipes);
	let selectedTags: string[] = $state([]);
	let allTags = new SvelteSet<string>();

	data.recipes.forEach((recipe: Recipe) => {
		recipe.tags.forEach((tag) => {
			allTags.add(tag);
		});
	});

	function search(keyword: string) {
		if (!keyword) {
			recipes = data.recipes;
			filterByTags(selectedTags);
		} else {
			filterByTags(selectedTags);
			recipes = recipes.filter((recipe: Recipe) =>
				recipe.title.toLowerCase().includes(keyword.toLowerCase())
			);
		}
		sortByDate(sortByAgeValue === 'newest');
	}

	function filterByTags(keywords: string[]) {
		if (!keywords || keywords.length === 0) {
			recipes = data.recipes;
		} else {
			recipes = data.recipes.filter((recipe: Recipe) =>
				keywords.every((keyword) => recipe.tags.includes(keyword))
			);
		}
	}

	function toggleTag(tag: string, checked: boolean) {
		if (checked) {
			selectedTags = [...selectedTags, tag];
		} else {
			selectedTags = selectedTags.filter((t) => t !== tag);
		}

		filterByTags(selectedTags);
		sortByDate(sortByAgeValue === 'newest');
	}

	function sortByDate(reversed: boolean) {
		if (reversed) {
			recipes.sort((a: Recipe, b: Recipe) => b.date.epoch - a.date.epoch);
		} else {
			recipes.sort((a: Recipe, b: Recipe) => a.date.epoch - b.date.epoch);
		}
	}

	const sortByAge = [
		{ value: 'newest', label: 'Newest' },
		{ value: 'oldest', label: 'Oldest' }
	];
	let sortByAgeValue = $state('');
	const triggerContent = $derived(
		sortByAge.find((f) => f.value === sortByAgeValue)?.label ?? 'Sort by Age'
	);
</script>

<main class="mx-5 flex flex-col items-center space-y-10 text-center md:space-y-15">
	<Input
		type="search"
		placeholder="keyword search"
		oninput={(e) => search((e.target as HTMLInputElement).value)}
		class="h-15 max-w-4xl"
	/>

	<Select.Root
		type="single"
		onValueChange={(value) => sortByDate(value === 'newest')}
		bind:value={sortByAgeValue}
	>
		<Select.Trigger class="w-45 bg-pink-300">{triggerContent}</Select.Trigger>
		<Select.Content class="text-black">
			<Select.Item value="newest">Newest</Select.Item>
			<Select.Item value="oldest">Oldest</Select.Item>
		</Select.Content>
	</Select.Root>

	<div class="flex max-w-5xl flex-row flex-wrap gap-3">
		{#each allTags as tag (tag)}
			<div
				class="flex flex-row items-center rounded-md bg-pink-300 pl-2 text-nowrap hover:bg-pink-500"
			>
				<Checkbox
					id={tag}
					onCheckedChange={(checked) => toggleTag(tag, checked === true)}
					class="cursor-pointer"
				/>
				<Label for={tag} class="cursor-pointer px-2 py-2">{tag}</Label>
			</div>
		{/each}
	</div>

	<div class="flex flex-row flex-wrap items-center justify-center gap-10">
		{#each recipes as recipe (recipe.slug)}
			<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}>
				<RecipeCard thumbnail={recipe.thumbnail} title={recipe.title} slug={recipe.slug} />
			</motion.div>
		{/each}
	</div>
</main>
