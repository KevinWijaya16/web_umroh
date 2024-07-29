import React from "react";
import Navbar from "../components/navbar2";

function Pesan() {
  return (
    <div className="flex flex-col h-[2000px] bg-green-500 ">
      <Navbar />
      <div className="grid grid-cols-3">
        <div className="col-span-1 bg-white shadow-xl p-4 mx-9 rounded-xl h-[1288px] my-[42px]">
          <p className="text-[#E3B02B] text-center -translate-y-4 rounded-b-xl font-semibold w-[200px] h-[50px] bg-black p-3 mx-auto">
            Filter Berdasarkan
          </p>

          <div className="font-bold text-center text-[17px] text-black mt-[25px] mb-2">
            Kota Keberangkatan
          </div>

          <div className="gap-x-10 gap-y-12 mx-10">
            <div className="flex items-center justify-center text-[17px] rounded-xl font-semibold text-center border border-black mr-40 mx-4 bg-white w-[130px] h-[45px]">
              Semua Kota
            </div>
            <div className="flex items-center justify-center text-[17px] rounded-xl font-semibold text-center border border-black mr-40 mx-4 bg-white w-[130px] h-[45px]">
              Semua Kota
            </div>
            <div className="flex items-center justify-center text-[17px] rounded-xl font-semibold text-center border border-black mr-40 mx-4 bg-white w-[130px] h-[45px]">
              Semua Kota
            </div>
            <div className="flex items-center justify-center text-[17px] rounded-xl font-semibold text-center border border-black mr-40 mx-4 bg-white w-[130px] h-[45px]">
              Semua Kota
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pesan;
