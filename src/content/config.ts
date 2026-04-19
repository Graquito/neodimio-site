import { defineCollection, z } from "astro:content";

const newsroom = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(["Noticia", "Investigación", "Producto", "Opinión"]),
    excerpt: z.string(),
    author: z.string().optional(),
  }),
});

export const collections = { newsroom };
