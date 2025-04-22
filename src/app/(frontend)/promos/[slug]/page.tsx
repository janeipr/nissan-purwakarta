import BlurImage from "@/app/components/BlurImage";
import { Navbar } from "@/app/components";
import getContent from "@/service/contents";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Metadata, ResolvingMetadata } from "next";
import { getImage } from "@/utils/image";
import { imageFromCMS } from "@/utils/helpers";
import { notFound } from "next/navigation";

interface Promo {
  title: string;
  slug: string;
  publishDate: string;
  description: string;
  thumbnail: string;
  icon: {
    src: string;
    color: string;
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  const { contents } = await getContent<Promo>("promo", [slug]);
  const contentDetail = contents[0];

  if (!contentDetail) {
    return {
      title: "Promo tidak ditemukan",
    };
  }

  const { img } = await getImage(imageFromCMS(contentDetail.thumbnail));

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

export default async function PromoDetailPage({ params }: Props) {
  const slug = (await params).slug;
  const { contents } = await getContent<Promo>("promo", [slug]);
  const { contents: allContents } = await getContent<Promo>("promo");

  if (!contents || contents.length <= 0) notFound();

  const currentPromo = contents[0];
  const otherPromos = allContents
    .filter((p) => {
    return p.slug !== slug})
    .slice(0, 3);

  return (
    <>
      <section id="Header" className="bg-portto-black relative">
        <Navbar />

        <section className="relative py-[50px]">
          <div className="container max-w-[1130px] mx-auto">
            <div className="flex flex-col items-center text-center gap-6">
              <h1 className="font-extrabold text-3xl text-white lg:text-[50px] lg:leading-[70px]">
                {currentPromo.title}
              </h1>
            </div>
          </div>
        </section>
      </section>

      <section className="container max-w-[1130px] mx-auto py-[100px]">
        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-5">
            <Link
              href="/promos"
              className="text-portto-black font-bold hover:underline w-fit"
            >
              ← Kembali ke Semua Promo
            </Link>
            <div
              style={{ backgroundColor: currentPromo.icon.color }}
              className="flex items-center justify-center shrink-0 w-20 h-20 mt-20 rounded-full"
            >
              <BlurImage
                src={currentPromo.icon.src}
                className="w-10 h-10 object-contain"
                alt="icon"
              />
            </div>
            <div className="w-full h-[500px]">
              <BlurImage
                src={currentPromo.thumbnail}
                className="w-full h-full object-contain"
                alt="image"
              />
            </div>
            <div className="prose max-w-none">
              <ReactMarkdown>{currentPromo.description}</ReactMarkdown>
            </div>
          </div>

          <div className="flex flex-col gap-[50px]">
            <h2 className="font-extrabold text-3xl lg:text-[50px] lg:leading-[70px]">
              Promo Lainnya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {otherPromos.map((p, i) => (
                <Link
                  key={i}
                  href={`/promos/${p.slug}`}
                  className="p-5 md:p-7 lg:p-[50px] pb-0 rounded-[30px] flex flex-col gap-8 bg-[#F4F5F8] hover:shadow-lg transition-all duration-300"
                >
                  <div
                    style={{ backgroundColor: p.icon.color }}
                    className="flex items-center justify-center shrink-0 w-16 h-16 rounded-full"
                  >
                    <BlurImage
                      src={p.icon.src}
                      className="w-8 h-8 object-contain"
                      alt="icon"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="font-semibold text-lg md:text-xl lg:text-2xl leading-tight">
                      {p.title}
                    </p>
                    <div className="text-gray-600 line-clamp-3 prose prose-sm">
                      <ReactMarkdown>{p.description}</ReactMarkdown>
                    </div>
                  </div>
                  <div className="w-full h-[300px]">
                    <BlurImage
                      src={p.thumbnail}
                      className="w-full h-full object-contain"
                      alt="image"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 