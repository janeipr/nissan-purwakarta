export const imageFromCMS = (path: string) => {
  return path.replace("/public", "");
};

export default { imageFromCMS };
