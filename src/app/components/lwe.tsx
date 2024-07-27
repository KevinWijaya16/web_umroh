import React from "react";
import Image from "next/image";
import map from "../../../public/img/map.svg";
import jam from "../../../public/img/jam.svg";
import buy from "../../../public/img/buy.svg";

function Lwe() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 bg-white shadow-2xl px-[18px] w-[930px] h-[120px] -translate-y-11 rounded-lg">
          <div className="mt-3">
            <div className="font-semibold text-left text-md py-2 mt-1">
              Lokasi Keberangkatan
            </div>
            <div className="bg-white rounded-md border border-[#959595] w-[210px] h-[37px] text-black flex items-center">
              <Image src={map} alt="Icon" className="mx-2 w-5 h-5" />
              <input
                type="text"
                placeholder="Pilih Lokasi Keberangkatan"
                className="text-black font-semibold text-xs outline-none flex-1"
              />
            </div>
          </div>

          <div className="mt-3">
            <div className="font-semibold text-left text-md py-2 mt-1">
              Waktu Keberangkatan
            </div>
            <div className="bg-white rounded-md border border-[#959595] w-[210px] h-[37px] text-black flex items-center">
              <Image src={jam} alt="Icon" className="mx-2 w-5 h-5" />
              <input
                type="text"
                placeholder="Pilih Waktu Keberangkatan"
                className="text-black font-semibold text-xs outline-none flex-1"
              />
            </div>
          </div>

          <div className="mt-3">
            <div className="font-semibold text-left text-md py-2 mt-1">
              Estimasi Biaya Umroh
            </div>
            <div className="bg-white rounded-md border border-[#959595] w-[210px] h-[37px] text-black flex items-center">
              <Image src={buy} alt="Icon" className="mx-2 w-5 h-5" />
              <input
                type="text"
                placeholder="Pilih Estimasi Biaya Umroh"
                className="text-black font-semibold text-xs outline-none flex-1"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button className="bg-black text-white font-bold py-2 px-4 rounded">
              Cari Paket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lwe;
