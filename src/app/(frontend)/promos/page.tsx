import BlurImage from "@/app/components/BlurImage";
import { Navbar } from "@/app/components";
import getContent from "@/service/contents";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Suspense } from "react";
import Loading from "@/app/components/Loading";

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

export default async function PromosPage() {
  const { contents } = await getContent<Promo>("promo");

  return (
    <>
      <section id="Header" className="bg-portto-black relative">
        <Navbar />

        <section className="relative py-16">
          <div className="container max-w-[1130px] mx-auto">
            <div className="flex flex-col items-center text-center gap-6">
              <h1 className="font-extrabold text-3xl text-white lg:text-[50px] lg:leading-[70px]">
                Semua Promo
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Temukan berbagai promo menarik dari Nissan Purwakarta untuk kendaraan impian Anda. Dapatkan penawaran terbaik dan fasilitas eksklusif.
              </p>
            </div>
          </div>
        </section>
      </section>

      <Suspense fallback={<div className="py-20"><Loading/></div>}>
      <section className="container max-w-[1130px] mx-auto py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((p, i) => (
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
      </section>
      </Suspense>
    </>
  );
} 