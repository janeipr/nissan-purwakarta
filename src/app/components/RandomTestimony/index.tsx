import GlobalContents from "@/contents/global.json";
import { imageFromCMS } from "@/utils/helpers";
import BlurImage from "../BlurImage";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import { QuoteIcon, StarIcon } from "../Icons";

export default function RandomTestimony() {
  const testimony =
    GlobalContents.testimonies[
      Math.floor(Math.random() * GlobalContents.testimonies.length)
    ];

  return (
    <section
      id="Featured-testimonial"
      className="container max-w-[1130px] mx-auto"
    >
      <div className="flex gap-[100px] items-center px-[65px] pt-[100px]">
        <div className="flex flex-col gap-5 relative">
          <div className="flex w-[200px] rounded-[30px] shrink-0 overflow-hidden z-10">
            <BlurImage
              className="w-full h-full object-cover"
              src={imageFromCMS(testimony.user.picture)}
              alt="photo"
            />
          </div>
          <div className="flex flex-col gap-[6px] text-center">
            <p className="font-bold text-2xl">{testimony.user.name}</p>
            <p className="text-xl text-[#878C9C]">{testimony.user.role}</p>
          </div>
          <Image
            src={QuoteIcon}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 left-[21px] top-[14px]"
            alt="icon"
          />
        </div>
        <div className="flex flex-col gap-[50px]">
          <div className="flex shrink-0">
            <BlurImage src={imageFromCMS(testimony.logo)} alt="logo" />
          </div>
          <p className="font-semibold text-[32px] leading-[60px]">
            <Markdown>{testimony.testimony}</Markdown>
          </p>
          <div className="flex h-8 w-fit shrink-0">
            {new Array(testimony.star).fill(0).map((_, s) => (
              <Image key={`testimony-star-${s}`} src={StarIcon} alt="star" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
