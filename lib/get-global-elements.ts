import { DrupalEntity, DrupalNode, DrupalNodeSchema } from "@/types/schemas";

const headers = {
  Authorization:
    "Basic " +
    Buffer.from(
      process.env.DRUPAL_USER_NAME + ":" + process.env.DRUPAL_USER_PASSWORD
    ).toString("base64"),
  "Content-Type": "application/vnd.api+json",
  Accept: "application/vnd.api+json",
};

/**
 * Retrieves a Drupal resource by its type and ID.
 * @param type - The type of the Drupal resource.
 * @param id - The ID of the Drupal resource.
 * @returns A Promise that resolves to the Drupal resource, or undefined if it cannot be found.
 */
export async function getDrupalResource(
  type: string,
  id: string
): Promise<DrupalEntity | undefined> {
  try {
    const resource = await getDrupalResourceCollection(type, true, id);
    return resource[0];
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

/**
 * Retrieves a collection of Drupal entities based on the provided type and optional ID.
 *
 * @param type - The type of Drupal entity to retrieve. Should be in the format "entityType--bundle".
 * @param sortByDate - Optional. Specifies whether to sort the collection by date. Defaults to true.
 * @param id - Optional. The ID of the specific entity to retrieve. If provided, the collection will only contain one entity.
 * @returns A Promise that resolves to an array of DrupalEntity objects.
 */
export async function getDrupalResourceCollection(
  type: string,
  sortByDate = true,
  id?: string
): Promise<DrupalEntity[]> {
  const [entityType, bundle] = type.split("--");
  const sortByDateParam = sortByDate ? "?sort_by=created" : "";

  let url = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${process.env.API_ENDPOINT}/${entityType}/${bundle}`;
  if (id) {
    url += `/${id}`;
  } else {
    url += sortByDateParam;
  }

  try {
    const resource = await fetch(url, { headers, cache: "no-store" });
    const data = await resource.json();

    if (id) {
      return [data.data];
    }

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getNodeByCategory(
  bundle: string,
  category = "",
  page = 0,
  pageSize = 6
) {
  const filter = `&filter[field_categoria.name][value]=${category}`;
  const pagination = `page[offset]=${page * pageSize}&page[limit]=${pageSize}`;
  const url = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${
    process.env.API_ENDPOINT
  }/node/${bundle}?sort_by=created${!!category ? filter : ""}&${pagination}`;

  try {
    const resource = await fetch(url, { headers, cache: "no-store" });
    const { data, links, meta } = await resource.json();

    return {
      data,
      hasNext: !!links.next,
      hasPrev: !!links.prev,
      total: meta.count,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * Retrieves a Drupal resource by its slug.
 * @param type - The type of the Drupal resource.
 * @param slug - The slug of the Drupal resource.
 * @returns The selected Drupal resource, or null if not found.
 */
export async function getDrupalNodeBySlug(
  type: string,
  slug: string | string[]
) {
  const collection = await getDrupalResourceCollection(`node--${type}`);

  if (!collection || collection.length === 0) {
    console.error(`Failed to fetch collection for type: ${type}`);
    return null;
  }

  const finalSlug = Array.isArray(slug) ? "/" + slug.join("/") : slug;
  const selectedItem = collection.find((item) =>
    DrupalNodeSchema.parse(item).attributes.path.alias.includes(finalSlug)
  );
  return selectedItem;
}

export const getMenu = async (name = "main") => {
  const linksetData = await fetch(
    `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/system/menu/${name}/linkset`
  );

  const { linkset } = await linksetData.json();

  return linkset[0].item.filter((item: any) => item.hierarchy.length === 1);
};
