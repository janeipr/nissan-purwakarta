import { Navbar } from "@/app/components";
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
        {
          url: process.env.NEXT_PUBLIC_BASEURL + img.src,
          width: img.width / 2,
          height: img.height / 2,
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

    </>
  );
}
