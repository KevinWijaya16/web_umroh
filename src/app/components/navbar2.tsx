"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import k from "../../../public/img/k.svg";
import i from "../../../public/img/i.svg";
import p from "../../../public/img/p.svg";
import profile from "../../../public/img/profile.svg";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const Pathname = usePathname();
  const isLoginPage = Pathname === "/login";
  const isRegisterPage = Pathname === "/register";

  return (
    <nav
      className={`flex items-center justify-between pt-7 pb-3  px-10  ${
        isLoginPage ? "bg-gradient-custom" : "flex"
      }`}
    >
      <div className="items-center space-x-4">
        <div className="text-black font-bold text-[25px]">UmrohYuk</div>
      </div>
      <div className={`flex justify-center items-center space-x-5`}>
        <div className="text-black flex ">
          <Image src={k} alt="Icon" className="h-10" />
          <a href="#" className="text-black font-semibold mt-2">
            Paket Umroh
          </a>
        </div>

        <div className="text-black flex">
          <Image src={i} alt="Icon" className="h-10" />
          <a href="#" className="text-black font-semibold mt-2">
            Tentang Kami
          </a>
        </div>

        <div className="text-black flex">
          <Image src={p} alt="Icon" className="h-10" />
          <a href="#" className="text-black font-semibold mt-2 mx-2">
            Mitra Kami
          </a>
        </div>
      </div>

      <div className="text-black flex">
        <Image src={profile} alt="Icon" className="h-[34px] mx-3  " />
        <a href="#" className="flex text-black font-semibold mt-1">
          Rudi Kustandi
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
