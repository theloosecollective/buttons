import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/gallery' }),
  schema: ({ image }) =>
    z.object({
      src: image(),
      alt: z.string(),
      caption: z.string(),
      order: z.number().optional(),
    }),
});

export const collections = { gallery };
