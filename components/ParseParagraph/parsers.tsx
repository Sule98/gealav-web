import { getImageSrc } from "@/lib/entity-utils";
import { DrupalParagraph, ParagraphHeroSchema } from "@/types/schemas";
import Hero from "../Hero";

export const renderHeroComponent = async (paragraph: DrupalParagraph) => {
  const {
    attributes: { field_title, field_subtitle, field_show_logo },
    relationships: { field_img_src },
  } = ParagraphHeroSchema.parse(paragraph);

  const imgSrc = field_img_src.data
    ? await getImageSrc(field_img_src)
    : undefined;

  return (
    <Hero
      title={field_title}
      subtitle={field_subtitle}
      imgSrc={imgSrc}
      showLogo={field_show_logo}
    />
  );
};
