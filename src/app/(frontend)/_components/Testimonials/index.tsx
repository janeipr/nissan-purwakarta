import BlurImage from "@/app/components/BlurImage";
import StarIcon from "^/public/images/icons/Star.svg";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      logo: "/images/logos/logo-testi.svg",
      testimony: `“Her working method were truly different from other freelancers,
              she has this kind of mindset that can create user-center product
              and user loved it”`,
      user: {
        name: "Jessi Lyio",
        role: "CPO Agolia Modd",
        picture: "/images/photo/photo.png",
      },
      star: 5,
    },
    {
      logo: "/images/logos/logo-testi2.svg",
      testimony: `“Her working method were truly different from other freelancers,
              she has this kind of mindset that can create user-center product
              and user loved it”`,
      user: {
        name: "Jessi Lyio",
        role: "CPO Agolia Modd",
        picture: "/images/photo/photo2.png",
      },
      star: 5,
    },
    {
      logo: "/images/logos/logo-testi3.svg",
      testimony: `“Her working method were truly different from other freelancers,
              she has this kind of mindset that can create user-center product
              and user loved it”`,
      user: {
        name: "Jessi Lyio",
        role: "CPO Agolia Modd",
        picture: "/images/photo/photo3.png",
      },
      star: 5,
    },
    {
      logo: "/images/logos/logo-testi4.svg",
      testimony: `“Her working method were truly different from other freelancers,
              she has this kind of mindset that can create user-center product
              and user loved it”`,
      user: {
        name: "Jessi Lyio",
        role: "CPO Agolia Modd",
        picture: "/images/photo/photo4.png",
      },
      star: 5,
    },
  ];

  return (
    <section id="Testimonials" className="bg-[#F4F5F8]">
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
                <BlurImage src={testimony.logo} alt="logo" />
              </div>
              <p className="font-semibold text-[22px] leading-[40px]">
                {testimony.testimony}
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
                  <BlurImage src={testimony.user.picture} alt="photo" />
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
