import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px] z-10">
        <a href="index.html" className="w-[161px] flex shrink-0 h-fit">
          <Image
            src="/images/logos/nissan/logo_Indomobil_Group.svg"
            width="80"
            height={80}
            alt="logo"
          />
        </a>
        <div className="flex gap-[50px] items-center">
          <ul className="flex gap-[50px] items-center text-white">
            <li>
              <a
                href="index.html"
                className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
              >
                Promo
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
              >
                About
              </a>
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
