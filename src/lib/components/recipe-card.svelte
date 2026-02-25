<script lang="ts">
	import { Card, Title, Header, Content } from './ui/card';

	interface RecipeCardProps {
		thumbnail: string;
		title: string;
		slug: string;
	}

	let { thumbnail, title, slug }: RecipeCardProps = $props();
</script>

<a href="/recipe/{slug}" class="flex items-center justify-center">
	<Card class="justify-center rounded-none border-none text-center">
		<Content>
			<img src={thumbnail} alt={title} class="h-60 w-64 object-cover md:h-96 md:w-96" />
		</Content>
		<Header>
			<Title>{title}</Title>
		</Header>
	</Card>
</a>
