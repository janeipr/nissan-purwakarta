import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export const getImage = async (src: string, isRemote: boolean = false) => {
  let buffer: Buffer<ArrayBufferLike>;

  if (isRemote) {
    buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
  } else {
    const finalPath = `/public${src.replace("/public", "")}`;

    buffer = await fs.readFile(`${process.cwd()}${finalPath}`);
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

export default { getImage };
