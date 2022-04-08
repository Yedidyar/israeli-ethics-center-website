import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }: any) => {
  const { alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      loader={() => getStrapiMedia(image)}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
      unoptimized
    />
  );
};

export default Image;
