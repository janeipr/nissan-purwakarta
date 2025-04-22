"use client";

import Image from "next/image";
import HomeContents from "@/contents/home.json";
import { HeroBg, HeroImage } from "@/app/components/Icons";
import { useBookingForm } from "@/app/context/BookingFormContext";

export default function Hero() {
  const { openForm } = useBookingForm();

  return (
    <div className="hero container max-w-[1130px] mx-auto flex flex-col lg:flex-row justify-between items-center relative">
      <div className="flex flex-col gap-[50px] h-fit w-fit text-white z-10">
        <h1 className="font-extrabold text-center lg:text-left text-3xl xl:text-4xl">
          {HomeContents.hero.title}
        </h1>
        <div className="font-light text-center lg:text-left text-md">
          <p className="font-bold mb-3 text-xl xl:text-2xl">
            {HomeContents.hero.subtitle}
          </p>
          {HomeContents.hero.description}
        </div>
        <button
          onClick={openForm}
          className="font-bold mx-auto lg:mx-0 text-[20px] lg:text-[26px] leading-[39px] rounded-[30px] p-[20px_30px] bg-portto-purple w-fit transition-all duration-300 hover:shadow-[0_10px_20px_0_#4920E5]"
        >
          {HomeContents.hero.button.label}
        </button>
      </div>
      <div className="flex mt-5 lg:mt-0 max-w-[471px] max-h-[567px] z-10">
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
