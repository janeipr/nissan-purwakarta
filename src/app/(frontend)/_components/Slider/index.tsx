import BlurImage from "@/app/components/BlurImage";
import Marquee from "react-fast-marquee";

export default function Slider() {
  const images = [
    {
      src: "/images/logos/nissan/logo_Citroen.png",
    },
    {
      src: "/images/logos/nissan/logo_Datsun.png",
    },
    {
      src: "/images/logos/nissan/logo_Kia.png",
    },
    {
      src: "/images/logos/nissan/logo_Nissan.jpg",
    },
  ];

  return (
    <div className="company-logos mt-5 lg:mt-0 w-full overflow-hidden pb-[190px]">
      <Marquee>
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <BlurImage
              src={image.src}
              className="w-full grayscale aspect-square h-full object-contain"
              alt="logo"
            />
          </div>
        ))}
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <BlurImage
              src={image.src}
              className="w-full grayscale aspect-square h-full object-contain"
              alt="logo"
            />
          </div>
        ))}
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <BlurImage
              src={image.src}
              className="w-full grayscale aspect-square h-full object-contain"
              alt="logo"
            />
          </div>
        ))}
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <BlurImage
              src={image.src}
              className="w-full grayscale aspect-square h-full object-contain"
              alt="logo"
            />
          </div>
        ))}
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <BlurImage
              src={image.src}
              className="w-full grayscale aspect-square h-full object-contain"
              alt="logo"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
