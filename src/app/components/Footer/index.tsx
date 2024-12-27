import BlurImage from "../BlurImage";
import CallIcon from "^/public/images/icons/call.svg";
import DribbleIcon from "^/public/images/icons/dribbble.svg";
import SMSIcon from "^/public/images/icons/sms.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-portto-black text-white pb-[50px] border-t-[10px] border-portto-purple">
      <div className="container max-w-[1130px] mx-auto flex justify-between pt-[100px] pb-[50px] mb-[50px] relative border-b border-[#585867]">
        <BlurImage
          src="/images/Ellipse.svg"
          className="absolute h-[300px] top-[70px] -left-[20px] z-0"
          alt="icon"
        />
        <div className="flex shrink-0 h-fit z-10">
          <BlurImage
            src="/images/logos/nissan/logo_Indomobil_Group.svg"
            width="80"
            alt="logo"
          />
        </div>
        <div className="flex gap-[100px] z-10">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-lg">Explore</p>
            <a
              href=""
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300"
            >
              Promo
            </a>
            <a
              href=""
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300"
            >
              Service
            </a>
            <a
              href=""
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300"
            >
              Testimonials
            </a>
            <a
              href=""
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300"
            >
              About
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-lg">Connect</p>
            <a
              href=""
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300 flex items-center gap-[6px]"
            >
              <Image src={CallIcon} alt="icon" />
              +1 2208 1996
            </a>
            <a
              href=""
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300 flex items-center gap-[6px]"
            >
              <Image src={DribbleIcon} alt="icon" />
              indomobil
            </a>
            <a
              href=""
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300 flex items-center gap-[6px]"
            >
              <Image src={SMSIcon} alt="icon" />
              team@indomobil.com
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-[#A0A0AC] text-center">
        All Rights Reserved. Copyright Indomobil
        <span id="copyright-year">{new Date().getFullYear()}</span>.
      </p>
    </footer>
  );
}
