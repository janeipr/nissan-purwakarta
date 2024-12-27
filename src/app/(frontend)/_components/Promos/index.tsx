import BlurImage from "@/app/components/BlurImage";
import HomeContents from "@/contents/home.json";

export default function Promos() {
  return (
    <>
      <section
        id="Services"
        className="container max-w-[1130px] mx-auto pt-[190px] pb-[100px]"
      >
        <div className="flex flex-col gap-[50px]">
          <div className="flex justify-between items-center">
            <h2 className="font-extrabold text-[50px] leading-[70px]">
              Promo and Penawaran Khusus
            </h2>
            <a
              href=""
              className="font-bold text-lg bg-portto-black rounded-full w-fit h-fit p-[14px_30px] text-white transition-all duration-300 hover:bg-white hover:text-portto-black hover:ring hover:ring-portto-black"
            >
              Semua Promo
            </a>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            {HomeContents.promo.map((p, i) => (
              <div
                key={i}
                className={`${
                  i === HomeContents.promo.length - 1 ? "col-span-2" : ""
                } p-[50px] pb-0 rounded-[30px] flex flex-col gap-[50px] bg-[#F4F5F8]`}
              >
                <div className="flex items-center justify-center shrink-0 w-20 h-20 rounded-full bg-portto-purple">
                  <BlurImage
                    src={"/images/icons/crown.svg"}
                    className="w-10 h-10 object-contain"
                    alt="icon"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="font-extrabold text-[32px] leading-[48px]">
                    Gratis Pemeriksaan 25 Titik untuk Servis Berkala!
                  </p>
                </div>
                <div
                  className={
                    i === HomeContents.promo.length - 1
                      ? "w-[450px] h-[350px] flex shrink-0"
                      : "w-full h-[350px]"
                  }
                >
                  <BlurImage
                    src="/images/services1.png"
                    className="w-full object-contain"
                    alt="image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
