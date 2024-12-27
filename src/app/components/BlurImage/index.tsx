import * as React from "react";
import Image, { ImageProps } from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";

type BlurImageProps = Omit<
  ImageProps,
  "src" | "placeholder" | "blurDataURL" | "alt"
> & {
  src: string;
  alt?: string;
  isRemote?: boolean;
};

const getImage = async (src: string, isRemote: boolean = false) => {
  let buffer: Buffer<ArrayBufferLike>;

  if (isRemote) {
    buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
  } else {
    buffer = await fs.readFile(`${process.cwd()}/public/${src}`);
  }

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
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
