<script lang="ts">
	import './layout.css';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<main class="flex min-h-screen flex-col bg-[url(/cute-bg.svg)]">
	<nav class="py-10 md:py-15">
		<ul
			class="mx-5 flex h-15 flex-row items-center gap-5 rounded-4xl bg-pink-300 px-8 font-semibold text-purple-900 shadow-inner shadow-pink-400 md:mx-15 md:gap-20 md:px-10"
		>
			<li class="rounded-md px-1 py-1 hover:bg-white">
				<a href="/"
					><img
						src="https://cdn.discordapp.com/emojis/736861030545621032.webp"
						alt="Peepo Happy Chef"
						width="32"
					/></a
				>
			</li>
			<li class="rounded-md px-1 py-1 hover:bg-white"><a href="/recipe">Recipes</a></li>
			<li class="rounded-md px-1 py-1 hover:bg-white"><a href="/project-info">Project Info</a></li>
		</ul>
	</nav>

	{@render children?.()}

	<footer
		class="mt-10 bg-pink-300 py-10 text-center text-purple-900 shadow-inner shadow-pink-400 md:py-25"
	>
		<ul class="flex flex-row items-center gap-5 px-8 font-semibold md:gap-20 md:px-10">
			<li>
				<a href="/">
					<img
						src="https://cdn.discordapp.com/emojis/736861030545621032.webp"
						alt="Peepo Happy Chef"
						width="32"
					/>
				</a>
			</li>
			<li><a href="/recipe">Recipes</a></li>
			<li><a href="/project-info">Project Info</a></li>
			<li>
				<a href="https://www.adolfogante.com/">Website built by ado-ante</a>
			</li>
		</ul>
	</footer>
</main>
