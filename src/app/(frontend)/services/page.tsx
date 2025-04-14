import BlurImage from "@/app/components/BlurImage";
import { Navbar } from "@/app/components";
import getContent from "@/service/contents";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { imageFromCMS } from "@/utils/helpers";

interface Service {
  slug: string;
  thumbnail: string;
  screenshots: {
    image: string;
    title: string;
  }[];
  subtitle: string;
  title: string;
  tags: string[];
  description: string;
  publishDate: string;
  category: string;
}

export default async function ServicesPage() {
  const { contents } = await getContent<Service>("service");

  return (
    <>
      <section id="Header" className="bg-portto-black relative">
        <Navbar />

        <section className="relative py-16">
          <div className="container max-w-[1130px] mx-auto">
            <div className="flex flex-col items-center text-center gap-6">
              <h1 className="font-extrabold text-3xl text-white lg:text-[50px] lg:leading-[70px]">
                Semua Layanan
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Temukan berbagai layanan berkualitas dari Nissan Purwakarta untuk kendaraan Anda. Dapatkan perawatan terbaik dari teknisi berpengalaman.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className="container max-w-[1130px] mx-auto py-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((service, i) => (
            <Link
              key={i}
              href={`/service/${service.slug}`}
              className="p-5 md:p-7 lg:p-[50px] pb-0 rounded-[30px] flex flex-col gap-8 bg-[#F4F5F8] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-[300px]">
                <BlurImage
                  src={imageFromCMS(service.thumbnail)}
                  className="w-full h-full object-cover rounded-[20px]"
                  alt="thumbnail"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-lg md:text-xl lg:text-2xl leading-tight">
                    {service.title}
                  </p>
                  <p className="text-portto-purple font-medium">
                    {service.category}
                  </p>
                </div>
                <div className="text-gray-600 line-clamp-3 prose prose-sm">
                  <ReactMarkdown>{service.description}</ReactMarkdown>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
} 