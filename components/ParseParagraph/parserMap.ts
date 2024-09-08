import Hero from "../Hero";
import { ParagraphNotFound } from "./ParagraphNotFound";
import { getHeroData } from "./parseHero";

export type ParserMap = {
  [key: string]: {
    element: React.ComponentType<any>;
    parser?: (id: string) => Promise<any> | undefined;
  };
};

/**
 * Mapping of paragraph types to their corresponding React components and data parsers.
 */
export const parserMap = {
  "paragraph--hero": {
    element: Hero,
    parser: getHeroData,
  },
  default: {
    element: ParagraphNotFound,
    parser: async () => {},
  },
};

export type ParserMapKey = keyof typeof parserMap;
