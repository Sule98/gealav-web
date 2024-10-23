import { getDrupalResource } from "@/lib/get-global-elements";
import { DrupalParagraph } from "@/types/schemas";

/**
 * Parses a Drupal paragraph and returns the corresponding element and data.
 * @param paragraph The Drupal paragraph to parse.
 * @returns An object containing the element and data of the parsed paragraph.
 */
export const parseParagraph = async (paragraph: DrupalParagraph) => {
  const { type, id } = paragraph;
  const parData = await getDrupalResource(type, id);

  if (!parData) {
    return null;
  }

  const elementName = type
    .split("--")[1]
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const renderFnName = `render${elementName}Component`;
  let renderFn;

  try {
    const parserModule = await import(`./parsers`);
    renderFn = parserModule[renderFnName as keyof typeof parserModule];
  } catch (error) {
    console.error(`Error importing parser module: ${error}`);
  }

  if (!renderFn) {
    const { ParagraphNotFound } = await import(
      `../ParagraphNotFound/ParagraphNotFound`
    );
    return ParagraphNotFound;
  }

  return renderFn(parData);
};
