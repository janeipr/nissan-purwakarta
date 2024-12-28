import { BlurImage } from "@/app/components";
import { EllipseIcon } from "@/app/components/Icons";
import { imageFromCMS } from "@/utils/helpers";
import Image from "next/image";

export default function HeroService({ content }: { content: Service }) {
  return (
    <div className="hero container max-w-[1130px] mx-auto flex flex-col justify-center items-center relative">
      <h1 className="font-extrabold text-[50px] leading-[70px] text-white text-center z-10">
        {content.title}
      </h1>
      <p className="text-xl leading-[30px] text-white z-10">
        {content.category}
      </p>
      <div className="flex shrink-0 w-full h-[800px] rounded-[50px] overflow-hidden bg-white mt-[70px] z-10">
        <BlurImage
          src={imageFromCMS(content.thumbnail)}
          className="w-full h-full object-cover"
          alt="thumbnail"
        />
      </div>
      <Image
        src={EllipseIcon}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-[135px] w-[35%]"
        alt="background icon"
      />
    </div>
  );
}
