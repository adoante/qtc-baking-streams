<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="flex min-h-screen flex-col bg-pink-200 py-5 md:py-10">
	{@render children?.()}
</main>
