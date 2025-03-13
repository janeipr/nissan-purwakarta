import BlurImage from "@/app/components/BlurImage";

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
      <div className="group/slider flex flex-nowrap w-full lg:w-max items-center">
        <div className="logo-container animate-[slide_25s_linear_infinite] group-hover/slider:pause-animate flex gap-[70px] pl-[70px] items-center flex-nowrap">
          {images.map((image, i) => (
            <div key={i} className="flex w-fit h-[40px] shrink-0">
              <BlurImage
                src={image.src}
                className="w-full grayscale aspect-square h-full object-contain"
                alt="logo"
              />
            </div>
          ))}
          {images.map((image, i) => (
            <div key={i} className="flex w-fit h-[40px] shrink-0">
              <BlurImage
                src={image.src}
                className="w-full grayscale aspect-square h-full object-contain"
                alt="logo"
              />
            </div>
          ))}
          {images.map((image, i) => (
            <div key={i} className="flex w-fit h-[40px] shrink-0">
              <BlurImage
                src={image.src}
                className="w-full grayscale aspect-square h-full object-contain"
                alt="logo"
              />
            </div>
          ))}
          {images.map((image, i) => (
            <div key={i} className="flex w-fit h-[40px] shrink-0">
              <BlurImage
                src={image.src}
                className="w-full grayscale aspect-square h-full object-contain"
                alt="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
