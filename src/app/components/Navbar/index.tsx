import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px] z-10">
        <Link href="/" className="w-[161px] flex shrink-0 h-fit">
          <Image
            src="/images/logos/nissan/logo_Indomobil_Group.svg"
            width="80"
            height={80}
            alt="logo"
          />
        </Link>
        <div className="flex gap-[50px] items-center">
          <ul className="flex gap-[50px] items-center text-white">
            <li>
              <Link
                href="/"
                className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                scroll
                href="/#promos"
                className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
              >
                Promo
              </Link>
            </li>
            <li>
              <Link
                scroll
                href="/#services"
                className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                scroll
                href="/#testimonials"
                className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
              >
                About
              </Link>
            </li>
          </ul>
          <button className="bg-portto-light-gold font-bold text-lg p-[14px_30px] rounded-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]">
            Book A Service
          </button>
        </div>
      </nav>
    </>
  );
}
