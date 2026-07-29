import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faculty = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faculty' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      title: z.string(),
      // Drop a headshot next to the .md file and reference it relatively,
      // e.g. photo: './jane-doe.jpg'. Omitted entries render initials instead.
      photo: image().optional(),
      researchAreas: z.array(z.string()),
      personalSite: z.url().optional(),
      googleScholar: z.url().optional(),
      // One-line summary used on the /people grid; the markdown body holds the full bio
      // shown on the individual /people/<slug> page.
      blurb: z.string().optional(),
      // e.g. { year: '2019', name: 'NSF CAREER Award' }. Year is optional because some
      // honors (fellowships, editorial roles) are better listed without one.
      awards: z
        .array(
          z.object({
            year: z.string().optional(),
            name: z.string(),
          }),
        )
        .default([]),
      // Free-form lines, e.g. 'PhD, University of California, Berkeley, 2010'.
      education: z.array(z.string()).default([]),
      // Surnames to match against publication author lists. Defaults to the last word
      // of `name`, but early papers often use a different form — Raghavachari published
      // as "R. Krishnan" in 1980 — so extra surnames can be listed here.
      authorAliases: z.array(z.string()).default([]),
      // Controls display order on /people; lower numbers sort first.
      order: z.number().default(999),
    }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      // Basename of an SVG in src/assets/motifs (decorative artwork, no data implied).
      // Used only when no real `figure` is supplied.
      motif: z.string().optional(),
      // A real figure from published work. Drop the image beside this markdown file
      // and reference it relatively, e.g. figure: ./tpsci-scheme.png
      figure: image().optional(),
      figureAlt: z.string().optional(),
      // Attribution / reuse note, e.g. "Adapted from Smith et al., JCTC 2024".
      figureCredit: z.string().optional(),
      // Each entry must match a faculty file's slug. Astro validates these at
      // build time, so a typo fails the build rather than rendering an empty list.
      faculty: z.array(reference('faculty')).default([]),
      order: z.number().default(999),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    link: z.url().optional(),
  }),
});

export const collections = { faculty, research, news };
