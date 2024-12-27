import BlurImage from "@/app/components/BlurImage";

export default function Services() {
  const services = [
    {
      image: "/images/thumbnails/thumbnail1.png",
      title: "AI Finance SaaS <br />Website Integrations",
      link: "/#", // details
    },
    {
      image: "/images/thumbnails/thumbnail2.png",
      title: "AI Finance SaaS <br />Website Integrations",
      link: "/#", // details
    },
    {
      image: "/images/thumbnails/thumbnail3.png",
      title: "AI Finance SaaS <br />Website Integrations",
      link: "/#", // details
    },
  ];

  return (
    <section
      id="Projects"
      className="w-full flex flex-col py-[100px] bg-background1 bg-cover bg-center bg-no-repeat"
    >
      <div className="flex flex-col gap-[10px] mb-[50px]">
        <h2 className="font-extrabold text-[50px] leading-[70px] text-center text-white">
          Rawat Mobil, Hindari Masalah!
        </h2>
        <p className="text-lg text-center text-white">
          Ketahui jadwal perawatan komponen penting.
        </p>
      </div>

      {[0, 1].map((v, i) => (
        <div
          key={v + i}
          className="projects w-full flex flex-col mb-[30px] overflow-hidden"
        >
          <div className="group/slider slider flex flex-nowrap w-max items-center">
            <div
              className={`project-container ${
                i === 0
                  ? "animate-[slide_50s_linear_infinite]"
                  : "animate-[slideToR_50s_linear_infinite]"
              } group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap`}
            >
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative"
                >
                  <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                    <BlurImage
                      src={service.image}
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                  <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                    <div className="text-center z-10">
                      <div
                        className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white"
                        dangerouslySetInnerHTML={{ __html: service.title }}
                      />
                      <p className="text-lg text-[#BABABC]">
                        Website Development
                      </p>
                    </div>
                    <a
                      href={service.link}
                      className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                    >
                      View Details
                    </a>
                    <BlurImage
                      src="/images/Ellipse.svg"
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                      alt="background icon"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`project-container ${
                i === 0
                  ? "animate-[slide_50s_linear_infinite]"
                  : "animate-[slideToR_50s_linear_infinite]"
              } group-hover/slider:pause-animate flex gap-[30px] pl-[30px] items-center flex-nowrap`}
            >
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group w-[650px] h-[450px] flex shrink-0 rounded-[30px] border border-white p-5 bg-[#FFFFFF33] backdrop-blur relative"
                >
                  <div className="w-[608px] h-[408px] rounded-[30px] overflow-hidden absolute">
                    <BlurImage
                      src={service.image}
                      className="w-full h-full object-cover"
                      alt="thumbnail"
                    />
                  </div>
                  <div className="flex flex-col w-full items-center justify-center gap-[50px] bg-portto-black rounded-[30px] relative opacity-0 hover:opacity-100 transition-all duration-300">
                    <div className="text-center z-10">
                      <div
                        className="font-extrabold text-[32px] leading-[48px] mb-[10px] text-white"
                        dangerouslySetInnerHTML={{ __html: service.title }}
                      />
                      <p className="text-lg text-[#BABABC]">
                        Website Development
                      </p>
                    </div>
                    <a
                      href={service.link}
                      className="z-10 font-bold text-lg text-center w-fit h-fit bg-portto-light-gold rounded-full p-[14px_30px] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
                    >
                      View Details
                    </a>
                    <BlurImage
                      src="/images/Ellipse.svg"
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-1/2"
                      alt="background icon"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
