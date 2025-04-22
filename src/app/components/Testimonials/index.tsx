import BlurImage from "@/app/components/BlurImage";
import Image from "next/image";
import GlobalContents from "@/contents/global.json";
import { imageFromCMS } from "@/utils/helpers";
import Markdown from "markdown-to-jsx";
import { StarIcon } from "../Icons";

export default function Testimonials() {
  const testimonials = GlobalContents.testimonies;

  return (
    <section id="testimonials" className="bg-[#F4F5F8]">
      <div className="container max-w-[1130px] mx-auto pt-[180px] pb-[100px]">
        <h2 className="font-extrabold text-[50px] leading-[70px] text-center">
          Kata Mereka Tentang Kami
        </h2>
        <div className="grid grid-cols-2 gap-[30px] mt-[50px]">
          {testimonials.map((testimony, i) => (
            <div
              key={i}
              className="card-testi bg-white rounded-[30px] flex flex-col p-5 gap-5"
            >
              <div className="h-[40px] flex shrink-0">
                <BlurImage src={imageFromCMS(testimony.logo)} alt="logo" />
              </div>
              <p className="font-semibold text-[22px] leading-[40px]">
                <Markdown>{testimony.testimony}</Markdown>
              </p>
              <div className="flex h-8">
                {new Array(testimony.star).fill(0).map((_, s) => (
                  <Image
                    key={`testimony-star-${s}`}
                    src={StarIcon}
                    alt="star"
                  />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[70px] h-[70px] shrink-0">
                  <BlurImage
                    src={imageFromCMS(testimony.user.picture)}
                    alt="photo"
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-bold text-xl leading-[30px]">
                    {testimony.user.name}
                  </p>
                  <p className="text-lg text-[#878C9C]">
                    {testimony.user.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
