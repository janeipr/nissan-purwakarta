import BlurImage from "@/app/components/BlurImage";
import HomeContents from "@/contents/home.json";
import getContent from "@/service/contents";
import Link from "next/link";

interface Promo {
  title: string;
  slug: string;
  publishDate: string;
  thumbnail: string;
  icon: {
    src: string;
    color: string;
  };
}

export default async function Promos() {
  const { contents } = await getContent<Promo>(
    "promo",
    HomeContents.promo.map((p) => p)
  );

  return (
    <>
      <section
        id="promos"
        className="container max-w-[1130px] mx-auto pt-[190px] pb-[100px]"
      >
        <div className="flex flex-col gap-[50px]">
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-3xl lg:text-[50px] lg:leading-[70px]">
              Promo dan Penawaran Khusus
            </h2>
            <Link
              href="/promos"
              className="font-bold text-center text-sm whitespace-nowrap lg:whitespace-normal lg:text-lg bg-portto-black rounded-full w-fit h-fit p-[14px_30px] text-white transition-all duration-300 hover:bg-white hover:text-portto-black hover:ring hover:ring-portto-black"
            >
              Semua Promo
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-[30px]">
            {contents.map((p, i) => (
              <Link
                key={i}
                href={`/promos/${p.slug}`}
                className={`${
                  i === contents.length - 1 ? "lg:col-span-2" : ""
                } p-5 md:p-7 lg:p-[50px] pb-0 rounded-[30px] flex flex-col gap-[50px] bg-[#F4F5F8] hover:shadow-lg transition-all duration-300`}
              >
                <div
                  style={{ backgroundColor: p.icon.color }}
                  className={`flex items-center justify-center shrink-0 w-20 h-20 rounded-full`}
                >
                  <BlurImage
                    src={p.icon.src}
                    className="w-10 h-10 object-contain"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="font-bold lg:font-extrabold text-xl md:text-2xl lg:text-[32px] lg:leading-[48px]">
                    {p.title}
                  </p>
                </div>
                <div
                  className={
                    i === contents.length - 1
                      ? "lg:w-[450px] lg:h-[350px] w-full h-auto flex shrink-0"
                      : "w-full lg:h-[350px] h-auto"
                  }
                >
                  <BlurImage
                    src={p.thumbnail}
                    className="w-full object-contain"
                    alt="image"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
