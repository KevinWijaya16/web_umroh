import React from "react";
import Image from "next/image";
import wa from "../../../public/img/wa.svg";

function Footer() {
  return (
    <div className="flex flex-col h-[482px] bg-[#E3B02B]">
      <div className="mx-auto px-6 my-auto">
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-2 flex flex-col items-center md:items-start my-auto mx-[80px]">
            <h3 className="text-xl font-bold mb-2">Umroh Yuk</h3>
            <p className="text-black font-semibold">
              JL. WastukencanaLorem Ipsum <br />
              Dolor Sit AmetLorem Ipsum <br /> Dolor Sit AmetLorem Ipsum <br />
              Dolor Sit Amet
            </p>
          </div>
          <div className="flex flex-col items-start space-y-[25px]">
            <h3 className="text-xl font-bold">Tentang Perusahaan</h3>
            <p className="text-black font-semibold">Beranda</p>
            <p className="text-black font-semibold">Paket Umroh</p>
            <p className="text-black font-semibold">Lainnya</p>
            <p className="text-black font-semibold">Tentang Kami</p>
          </div>
          <div className="flex flex-col items-start space-y-[25px] mx-4">
            <h3 className="text-xl font-bold text-black">Jadi Mitra Kami</h3>
            <p className="text-black font-semibold">Gabung Mitra</p>
            <p className="text-black font-semibold">Mitra Kami</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center text-xl font-semibold bg-[#404040A6] rounded-full p-[10px] mb-[20px] opacity-[65%]">
              <Image
                src={wa}
                alt="Icon"
                className="w-[20px] h-[20px] mr-[8px]"
              />
              <h3 className="text-[12px] text-white">Hubungi Kami</h3>
            </div>
            <ul className="mt-10 text-black font-semibold text-sm list-disc pl-6">
              <li>Phone: 0819237568</li>
              <li>Fax: 1235749182</li>
              <li>Contact Center: 0812020</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[88px] items-start justify-start bg-black">
        <p className="text-white my-auto mx-[50px] font-semibold text-[14px]">
          © 2023 Umroh Yuk Indonesia
        </p>
      </div>
    </div>
  );
}

export default Footer;
