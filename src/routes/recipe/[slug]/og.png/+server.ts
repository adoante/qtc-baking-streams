import { ImageResponse } from '@vercel/og';
import type { RequestHandler } from './$types';

export const config = {
	runtime: 'edge'
};

export const GET: RequestHandler = async ({ params, fetch, url }) => {
	const res = await fetch(`/recipes-data/${params.slug}.json`);

	if (!res.ok) {
		return new Response('Not found', { status: 404 });
	}

	const recipe = await res.json();

	return new ImageResponse(
		{
			type: 'div',
			props: {
				style: {
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '64px',
					background: '#fff7ed'
				},
				children: {
                    type: 'img',
					props: {
						src: `${url.origin}/recipes-data/${recipe.slug}-og.jpg`,
						style: {
							width: '100%',
							height: '100%',
							objectFit: 'cover'
						}
					}
                }
			}
		},
		{
			width: 1200,
			height: 630
		}
	);
};
