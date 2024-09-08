import { getImageSrc } from "@/lib/entity-utils";
import { getDrupalResource } from "@/lib/get-global-elements";
import { ParagraphHeroSchema } from "@/types/schemas";

export const getHeroData = async (id: string) => {
  const paragraphHero = await getDrupalResource("paragraph--hero", id);

  if (!paragraphHero) {
    return null;
  }

  const {
    attributes: { field_title, field_subtitle, field_show_logo },
    relationships: { field_img_src },
  } = ParagraphHeroSchema.parse(paragraphHero);

  const imgSrc = field_img_src.data ? await getImageSrc(field_img_src) : undefined;

  return {
    title: field_title,
    subtitle: field_subtitle,
    imgSrc,
    showLogo: field_show_logo,
  };
};
