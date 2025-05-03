import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().url(),
    date: z.string(),
    category: z.string().optional(),
    hidden: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
