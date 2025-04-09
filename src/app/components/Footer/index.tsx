import BlurImage from "../BlurImage";
import Image from "next/image";
import { CallIcon, DribbleIcon, SMSIcon } from "../Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-portto-black text-white pb-[50px] border-t-[10px] border-portto-purple">
      <div className="container max-w-[1130px] mx-auto flex flex-col lg:flex-row justify-between pt-[100px] pb-[50px] mb-[50px] relative border-b border-[#585867]">
        
        <div className="flex flex-col lg:flex-row shrink-0 h-fit z-10">
          <BlurImage
            src="/images/logos/nissan/logo_Indomobil_Group.svg"
            width="80"
            alt="logo"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-[100px] z-10">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-lg">Explore</p>
            <Link
              href="/#promos"
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300"
            >
              Promo
            </Link>
            <Link
              href="/#services"
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300"
            >
              Service
            </Link>
            <Link
              href="/#testimonials"
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300"
            >
              Testimonials
            </Link>
            <Link
              href="/#about"
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300"
            >
              About
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-lg">Connect</p>
            <Link
              href="tel:"
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300 flex items-center gap-[6px]"
            >
              <Image src={CallIcon} alt="icon" />
              +1 2208 1996
            </Link>
            <Link
              href="#"
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300 flex items-center gap-[6px]"
            >
              <Image src={DribbleIcon} alt="icon" />
              indomobil
            </Link>
            <Link
              href="mailto:"
              className="font-medium hover:font-semibold hover:text-portto-light-gold transition-all duration-300 flex items-center gap-[6px]"
            >
              <Image src={SMSIcon} alt="icon" />
              team@indomobil.com
            </Link>
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
