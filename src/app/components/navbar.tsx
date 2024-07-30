"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import k from "../../../public/img/k.svg";
import i from "../../../public/img/i.svg";
import p from "../../../public/img/p.svg";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const Pathname = usePathname();
  const isLoginPage = Pathname === "/login";
  const isRegisterPage = Pathname === "/register";

  return (
    <nav
      className={`flex items-center justify-between pt-7 pb-3  px-10 w-full ${
        isLoginPage ? "bg-gradient-custom" : "flex"
      }`}
    >
      <div className="items-center space-x-4">
        <div className="text-black font-bold text-[25px]">UmrohYuk</div>
      </div>
      <div
        className={`flex items-center space-x-5 ${
          isLoginPage || isRegisterPage ? "mr-[350px]" : "flex"
        }`}
      >
        <div className="text-black flex">
          <Image src={k} alt="Icon" className="h-10" />
          <Link href="/pesan">
            <p className="text-black font-semibold mt-2">Paket Umroh</p>
          </Link>
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

      <div
        className={`flex items-center space-x-4 ${
          isLoginPage || isRegisterPage ? "hidden" : "flex"
        }`}
      >
        <Link href="/login">
          <button className="text-black font-bold py-2 px-4 rounded">
            Masuk
          </button>
        </Link>

        <Link href="/register">
          <button className="bg-[#E3B02B] text-white font-bold py-2 px-4 rounded">
            Daftar
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
