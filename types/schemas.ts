import { z } from "zod";

export const DrupalEntitySchema = z.object({
  id: z.string(),
  type: z.string(),
});

const DrupalRelationshipSchema = z.object({
  data: DrupalEntitySchema.nullable(),
});

export const DrupalNodeSchema = DrupalEntitySchema.extend({
  type: z.string().regex(/^node--/),
  attributes: z.object({
    title: z.string(),
    created: z.string(),
    path: z.object({
      alias: z.string(),
    }),
  }),
});

const DrupalParagraphSchema = DrupalEntitySchema.extend({
  type: z.string().regex(/^paragraph--/),
});

export const ParagraphHeroSchema = DrupalParagraphSchema.extend({
  attributes: z.object({
    field_title: z.string(),
    field_subtitle: z.string(),
    field_show_logo: z.boolean(),
  }),
  relationships: z.object({
    field_img_src: DrupalRelationshipSchema,
  }),
});

export const DrupalPageSchema = DrupalNodeSchema.extend({
  type: z.literal("node--page"),
  relationships: z.object({
    field_paragraphs: z.object({
      data: z.array(DrupalParagraphSchema),
    }),
  }),
});

export const DrupalMediaSchema = DrupalEntitySchema.extend({
  type: z.string().regex(/^media--/),
  attributes: z.object({
    name: z.string(),
  }),
  relationships: z.object({
    field_media_image: DrupalRelationshipSchema,
  }),
});

export const DrupalFileSchema = DrupalEntitySchema.extend({
  type: z.literal("file--file"),
  attributes: z.object({
    uri: z.object({
      url: z.string(),
    }),
  }),
});

export type DrupalRelationship = z.infer<typeof DrupalRelationshipSchema>;

export type DrupalNode = z.infer<typeof DrupalNodeSchema>;
export type DrupalPage = z.infer<typeof DrupalPageSchema>;
export type DrupalEntity = z.infer<typeof DrupalEntitySchema>;
export type DrupalMedia = z.infer<typeof DrupalMediaSchema>;
export type DrupalFile = z.infer<typeof DrupalFileSchema>;

export type DrupalParagraph = z.infer<typeof DrupalParagraphSchema>;
export type ParagraphHero = z.infer<typeof ParagraphHeroSchema>;
