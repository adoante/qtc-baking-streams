<script lang="ts">
	import { Card, Title, Header, Content } from './ui/card';

	interface RecipeCardProps {
		thumbnail: string;
		title: string;
		slug: string;
	}

	let { thumbnail, title, slug }: RecipeCardProps = $props();
</script>

<a href="/recipe/{slug}">
	<Card class="max-w-xs rounded-none text-center">
		<Content>
			<img src={thumbnail} alt={title} />
		</Content>
		<Header>
			<Title>{title}</Title>
		</Header>
	</Card>
</a>
