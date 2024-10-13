import { DrupalParagraph } from "@/types/schemas";
import { parserMap, ParserMapKey } from "./parserMap";
import { getDrupalResource } from "@/lib/get-global-elements";

/**
 * Parses a Drupal paragraph and returns the corresponding element and data.
 * @param paragraph The Drupal paragraph to parse.
 * @returns An object containing the element and data of the parsed paragraph.
 */
export const parseParagraph = async (paragraph: DrupalParagraph) => {
  const parData = await getDrupalResource(paragraph.type, paragraph.id);

  if (!parData) {
    return null;
  }

  const type = (
    paragraph.type in parserMap ? paragraph.type : "default"
  ) as ParserMapKey;
  const { element, parser } = parserMap[type];

  return {
    element,
    data: type !== "default" ? await parser(parData) : { type: paragraph.type },
  };
};
