import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const chapters = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/chapters',
    // "03-a-tudat-egyesitese.md" -> "a-tudat-egyesitese"
    generateId: ({ entry }) => entry.replace(/^\d+-/, '').replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = { chapters };
