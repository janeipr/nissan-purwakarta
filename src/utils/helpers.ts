import CONFIG from "@/config";

export const imageFromCMS = (path: string) => {
  return path.replace("/public", "");
};

export const redirectToWA = () => {
  return window.open(
    `https://wa.me/${CONFIG.WA_NUMBER}?text=${encodeURI(CONFIG.WA_TEXT)}`
  );
};

export default { imageFromCMS };
