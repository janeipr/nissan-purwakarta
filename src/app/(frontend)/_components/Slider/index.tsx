import BlurImage from "@/app/components/BlurImage";
import Image from "next/image";
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
      src: "/images/logos/nissan/logo_Nissan-new.png",
    },
  ];

  return (
    <div className="company-logos mt-5 lg:mt-10 w-full overflow-hidden pb-[190px]">
      <Marquee>
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <Image
            height={40}
            width={40}
              src={image.src}
              className="w-full grayscale aspect-square h-full object-contain"
              alt="logo"
            />
          </div>
        ))}
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <Image
            height={40}
            width={40}
              src={image.src}
              className="w-full grayscale aspect-square h-full object-contain"
              alt="logo"
            />
          </div>
        ))}
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <Image
            height={40}
            width={40}
              src={image.src}
              className="w-full grayscale aspect-square h-full object-contain"
              alt="logo"
            />
          </div>
        ))}
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <Image
            height={40}
            width={40}
              src={image.src}
              className="w-full grayscale aspect-square h-full object-contain"
              alt="logo"
            />
          </div>
        ))}
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <Image
            height={40}
            width={40}
              src={image.src}
              className="w-full grayscale aspect-square h-full object-contain"
              alt="logo"
            />
          </div>
        ))}
        {images.map((image, i) => (
          <div key={i} className="mx-5 w-fit h-[40px] shrink-0">
            <Image
            height={40}
            width={40}
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
