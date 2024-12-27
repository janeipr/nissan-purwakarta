"use client";

import Image from "next/image";
import { useState } from "react";

import MessageIcon from "^/public/images/icons/messages.svg";
import ArrowIcon from "^/public/images/icons/arrow-circle-down.svg";

const faqs = [
  {
    q: "How much I charge per project?",
    a: "I don't charge hourly. I charge based on the project brief and given timeline to finish that particular project.",
  },
  {
    q: "How do I work usually?",
    a: `As a freelancer, my work process is characterized by flexibility, self-discipline, and a strong emphasis on client communication.`,
  },
  {
    q: "Can I work full-time?",
    a: "I don't work full-time. At this moment, I prefer to work remotely and based on the certain project only.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(faqs.map(() => false));

  const handleClick = (index: number) => {
    const newIndexes = faqs.map(() => false);
    newIndexes[index] = !activeIndex[index];

    setActiveIndex(newIndexes);
  };

  return (
    <section id="FAQ" className="container max-w-[1130px] mx-auto">
      <div className="flex gap-[70px] items-center pt-[100px] pb-[150px]">
        <div className="flex flex-col gap-[30px]">
          <div className="w-20 h-20 flex shrink-0 rounded-full bg-portto-purple items-center justify-center">
            <Image src={MessageIcon} alt="icon" />
          </div>
          <div className="flex flex-col gap-[10px]">
            <h2 className="font-extrabold text-[50px] leading-[70px]">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#878C9C]">
              If you have any question please contact me.
            </p>
          </div>
          <a
            href=""
            className="bg-portto-black font-bold text-lg text-white rounded-full p-[14px_30px] w-fit transition-all duration-300 hover:bg-white hover:text-portto-black hover:ring hover:ring-portto-black"
          >
            Contact Me
          </a>
        </div>
        <div className="flex flex-col gap-[30px] w-[603px] shrink-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => {
                handleClick(i);
              }}
              className="flex flex-col p-5 rounded-2xl bg-[#F4F5F8] w-full"
            >
              <button className="accordion-button flex justify-between gap-1 items-center">
                <span className="font-bold text-2xl">{faq.q}</span>
                <div className="arrow w-9 h-9 flex shrink-0">
                  <Image
                    src={ArrowIcon}
                    className={`transition-all duration-300 ${
                      activeIndex[i] ? "rotate-180" : ""
                    }`}
                    alt="icon"
                  />
                </div>
              </button>
              <div
                className={`accordion-content ${
                  activeIndex[i] ? "" : "hidden"
                }`}
              >
                <p className="text-[20px] leading-[36px] pt-5">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
