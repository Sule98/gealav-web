import {
  DrupalFileSchema,
  DrupalMediaSchema,
  DrupalRelationship,
} from "@/types/schemas";
import { getDrupalResource } from "./get-global-elements";
import { absoluteUrl } from "./utils";

/**
 * Retrieves the source URL of an image from a DrupalRelationship object.
 * If the image field is multiple, an empty string is returned.
 *
 * @param fieldImage - The DrupalRelationship object representing the image field.
 * @param isMedia - Optional parameter indicating whether the image is a media file. Default is true.
 * @returns The source URL of the image, or an empty string if the image is not found or an error occurs.
 */
export async function getImageSrc(
  fieldImage: DrupalRelationship,
  isMedia = true
) {
  if (!fieldImage.data) {
    return "";
  }
  try {
    let resourceId: string;
    if (isMedia) {
      const mediaImage = await getDrupalResource(
        "media--image",
        fieldImage.data.id
      );
      resourceId = DrupalMediaSchema.parse(mediaImage).relationships
        .field_media_image.data?.id as string;
    } else {
      resourceId = fieldImage.data.id;
    }

    const file = DrupalFileSchema.parse(
      await getDrupalResource("file--file", resourceId)
    );
    return file ? absoluteUrl(file.attributes.uri.url) : "";
  } catch (error) {
    console.error("Error fetching image source:", error);
    return "";
  }
}
