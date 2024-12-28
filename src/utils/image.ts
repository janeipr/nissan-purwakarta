import { getPlaiceholder } from "plaiceholder";

export const getImage = async (src: string, isRemote: boolean = false) => {
  let buffer: Buffer<ArrayBufferLike>;
  const finalPath = (!isRemote ? process.env.NEXT_PUBLIC_BASEURL : "") + src;

  buffer = await fetch(finalPath).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
};

export default { getImage };
