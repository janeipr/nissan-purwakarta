import * as React from "react";
import Image, { ImageProps } from "next/image";
import { getImage } from "@/utils/image";

type BlurImageProps = Omit<
  ImageProps,
  "src" | "placeholder" | "blurDataURL" | "alt"
> & {
  src: string;
  alt?: string;
  isRemote?: boolean;
};

export default async function BlurImage(props: BlurImageProps) {
  const { base64, img } = await getImage(props.src, props.isRemote);

  return (
    <Image
      {...img}
      placeholder="blur"
      blurDataURL={base64}
      alt={props.alt ?? "image"}
      {...props}
    />
  );
}
