import { parseParagraph } from "@/components/ParseParagraph/parseParagraph";
import { getDrupalNodeBySlug } from "@/lib/get-global-elements";
import { DrupalPage, DrupalPageSchema, DrupalParagraph } from "@/types/schemas";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const page = await getDrupalNodeBySlug("page", slug);

  if (!page) {
    return notFound();
  }

  const paragraphs =
    page &&
    (await Promise.all(
      DrupalPageSchema.parse(page).relationships.field_paragraphs.data.map(
        async (paragraph) => {
          return await parseParagraph(paragraph);
        }
      )
    ));

  if (!paragraphs) {
    return null;
  }

  return (
    <div>
      <main className="h-screen">
        {paragraphs.map(({ element: Element, data }, index) => {
          //@ts-ignore
          return <Element key={`paragraph-${page.id}-${index}`} {...data} />;
        })}
      </main>
    </div>
  );
}
