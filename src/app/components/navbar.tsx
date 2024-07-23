import React from "react";
import Image from "next/image";
import k from "../../../public/img/k.svg";
import i from "../../../public/img/i.svg";
import p from "../../../public/img/p.svg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 mb-[10px] px-10 w-full">
      <div className="flex items-center space-x-4">
        <div className="text-black font-bold text-[25px]">UmrohYuk</div>
      </div>
      <div className="flex items-center space-x-4">
        <i className="text-black">
          <Image src={k} alt="Icon" className="h-10" />
        </i>
        <a href="#" className="text-black font-semibold">
          Paket Umroh
        </a>
        <i className="text-black">
          <Image src={i} alt="Icon" className="h-10" />
        </i>
        <a href="#" className="text-black font-semibold">
          Tentang Kami
        </a>
        <i className="text-black">
          <Image src={p} alt="Icon" className="h-10" />
        </i>
        <a href="#" className="text-black font-semibold">
          Mitra Kami
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-black font-bold py-2 px-4 rounded">
          Masuk
        </button>
        <button className="bg-[#E3B02B] text-white font-bold py-2 px-4 rounded">
          Daftar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
