import { BlurImage, Fancybox } from "@/app/components";
import { EyeIcon } from "@/app/components/Icons";
import { imageFromCMS } from "@/utils/helpers";
import Image from "next/image";

export default function ScreenshotsService({ content }: { content: Service }) {
  return (
    <section
      id="Screenshots"
      className="container max-w-[1130px] mx-auto pt-[50px]"
    >
      <div className="flex flex-col gap-5">
        <h2 className="font-extrabold text-2xl">Screenshots</h2>
        <div>
          <Fancybox
            className="grid grid-cols-4 gap-5"
            options={{
              Carousel: {
                infinite: false,
              },
            }}
          >
            {content.screenshots.map((ss, i) => (
              <a
                key={i}
                href={imageFromCMS(ss.image)}
                className="group w-full h-[190px] flex overflow-hidden rounded-[30px] ring-1 ring-[#E4E5E8] transition-all duration-300 hover:ring-[3px] hover:ring-portto-purple relative"
                data-fancybox="gallery"
                data-caption={ss.title}
              >
                <BlurImage
                  src={imageFromCMS(ss.image)}
                  className="w-full h-full object-cover"
                  alt={ss.title}
                />
                <Image
                  src={EyeIcon}
                  className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
                  alt="icon eye"
                />
              </a>
            ))}
          </Fancybox>
        </div>
      </div>
    </section>
  );
}
