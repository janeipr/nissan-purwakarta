import { Navbar, FAQ, RandomTestimony } from "@/app/components";
import getContent from "@/service/contents";
import HeroService from "./_components/Hero";
import DetailService from "./_components/Detail";
import ScreenshotsService from "./_components/Screenshots";

import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { getImage } from "@/utils/image";
import { imageFromCMS } from "@/utils/helpers";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  const { contents } = await getContent<Service>("service", [slug]);
  const contentDetail = contents[0];

  const { img } = await getImage(imageFromCMS(contentDetail.thumbnail));

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: contentDetail.title,
    openGraph: {
      images: [
        {
          url: process.env.NEXT_PUBLIC_BASEURL + img.src,
          width: img.width,
          height: img.height,
        },
        ...previousImages,
      ],
    },
  };
}

export default async function ServiceDetail({ params }: Props) {
  const slug = (await params).slug;

  const { contents } = await getContent<Service>("service", [slug]);

  if (!contents || contents.length <= 0) notFound();

  const contentDetail = contents[0];

  return (
    <>
      <section
        id="Header"
        className="flex flex-col gap-[100px] bg-portto-black relative max-h-[665px] mb-[525px]"
      >
        <Navbar />

        <HeroService content={contentDetail} />
      </section>

      <DetailService content={contentDetail} />

      <ScreenshotsService content={contentDetail} />

      <RandomTestimony />

      {/* <section id="Book" className="container max-w-[1130px] mx-auto">
        <div className="bg-portto-black flex justify-between px-[50px] rounded-[50px] h-[476px] mt-[100px] bg-[url('/images/Ellipse.svg')] bg-center bg-no-repeat bg-contain bg-[length:400px_400px] relative">
          <div className="group/projects w-[220px] overflow-hidden">
            <div className="slider flex flex-col h-max justify-center">
              <div className="project-container animate-[slideToT_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail1.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail2.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail3.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="slider flex flex-col h-max justify-center">
              <div className="project-container animate-[slideToT_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail1.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail2.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail3.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-center text-center w-fit">
            <h2 className="font-extrabold text-[40px] leading-[60px] text-white">
              Let Me Help You <br />
              Grow Business Today
            </h2>
            <p className="font-semibold text-lg leading-[32px] text-white">
              I will dedicate my entire career to focus <br />
              on finishing your future dreams
            </p>
            <a
              href="book.html"
              className="bg-portto-light-gold font-bold text-lg p-[14px_30px] rounded-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
            >
              Book a Meeting
            </a>
          </div>
          <div className="group/projects w-[220px] overflow-hidden">
            <div className="slider flex flex-col h-max justify-center">
              <div className="project-container animate-[slideToB_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail1.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail2.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail3.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="slider flex flex-col h-max justify-center">
              <div className="project-container animate-[slideToB_30s_linear_infinite] group-hover/projects:pause-animate flex flex-col gap-[30px] pt-[30px] justify-center">
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail1.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail2.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
                <div className="w-full h-[160px] flex shrink-0 rounded-[30px] border border-white p-[10px] bg-[#FFFFFF33] backdrop-blur">
                  <div className="w-full h-full rounded-[20px] overflow-hidden">
                    <img
                      src="/images/thumbnails/thumbnail3.png"
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <FAQ />
    </>
  );
}
