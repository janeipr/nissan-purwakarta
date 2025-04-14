import { BlurImage } from "@/app/components";
import { imageFromCMS } from "@/utils/helpers";

export default function HeroService({ content }: { content: Service }) {
  return (
    <div className="hero container max-w-[1130px] mx-auto flex flex-col justify-center items-center relative">
      <h1 className="font-extrabold text-[50px] leading-[70px] text-white text-center z-10">
        {content.title}
      </h1>
      <p className="text-xl leading-[30px] text-white z-10">
        {content.category}
      </p>
      <div className="flex shrink-0 w-full h-[600px] overflow-hidden mt-[70px] z-10">
        <BlurImage
          src={imageFromCMS(content.thumbnail)}
          className="w-full h-full object-cover rounded-[50px] "
          alt="thumbnail"
        />
      </div>
    </div>
  );
}
