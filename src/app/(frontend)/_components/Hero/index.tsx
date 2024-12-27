import Image from "next/image";
import HeroImage from "^/public/images/hero-image.png";
import HeroBg from "^/public/images/Ellipse.svg";
import HomeContents from "@/contents/home.json";

export default function Hero() {
  return (
    <div className="hero container max-w-[1130px] mx-auto flex justify-between items-center relative">
      <div className="flex flex-col gap-[50px] h-fit w-fit text-white z-10">
        <h1 className="font-extrabold text-4xl">{HomeContents.hero.title}</h1>
        <div className="font-light text-lg">
          <span className="font-bold text-2xl">
            {HomeContents.hero.subtitle}
          </span>
          <br />
          {HomeContents.hero.description}
        </div>
        <button className="font-bold text-[26px] leading-[39px] rounded-[30px] p-[30px_40px] bg-portto-purple w-fit transition-all duration-300 hover:shadow-[0_10px_20px_0_#4920E5]">
          {HomeContents.hero.button.label}
        </button>
      </div>
      <div className="flex max-w-[471px] max-h-[567px] z-10">
        <Image
          placeholder="blur"
          src={HeroImage}
          className="w-full h-full object-contain"
          alt="hero image"
        />
      </div>
      <Image
        src={HeroBg}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        alt="background icon"
      />
    </div>
  );
}
