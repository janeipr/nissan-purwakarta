"use client";

import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "../Icons";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useBookingForm } from "@/app/context/BookingFormContext";


const NavLink = ({ onBookingClick }: { onBookingClick: () => void }) => {
  

  return (
    <>
      <ul className="flex flex-col lg:flex-row gap-10 lg:gap-[50px] lg:items-center text-portto-black lg:text-white">
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
            href="/promos"
            className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
          >
            Promo
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="font-medium text-lg hover:text-portto-light-gold transition-all duration-300"
          >
            About
          </Link>
        </li>
      </ul>
      <button
        onClick={onBookingClick}
        className="bg-portto-light-gold text-black mt-10 lg:mt-0 w-full lg:w-fit font-bold text-lg p-[14px_30px] rounded-full transition-all duration-300 hover:shadow-[0_10px_20px_0_#FFE7C280]"
      >
        Book A Service
      </button>
    </>
  );
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openForm } = useBookingForm();

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleBookingClick = () => {
    openForm();
    setMobileOpen(false);
  };

  return (
    <nav className="container max-w-[1130px] mb-[50px] lg:mb-[100px] mx-auto flex justify-between items-center pt-[30px] z-10">
      <Link href="/" className="w-[161px] flex shrink-0 h-fit">
        <Image
          src={Logo}
          className="lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]"
          alt="logo"
        />
      </Link>
      <div className="gap-[50px] hidden lg:flex items-center">
        <NavLink onBookingClick={handleBookingClick} />
      </div>
      <div onClick={toggleMenu} className="cursor-pointer block lg:hidden">
        <RxHamburgerMenu size={36} color="white" />
      </div>
      <div
        className={[
          " bg-white transition-all duration-200 ease-in-out h-screen w-full p-5 top-0 fixed left-0 z-50",
          mobileOpen ? "translate-x-0" : "translate-x-[100%]",
        ].join(" ")}
      >
        <div className="relative">
          <div
            onClick={toggleMenu}
            className="absolute right-2 top-0 cursor-pointer"
          >
            <IoCloseOutline size={36} />
          </div>

          <NavLink onBookingClick={handleBookingClick} />
        </div>
      </div>
    </nav>
  );
}
