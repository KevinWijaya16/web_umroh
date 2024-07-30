import React from "react";
import ListCardPesan from "../list_card/page";

function Kolom2() {
  return (
    <div>
      <div className="flex bg-white w-[680px] h-[110px] my-[40px] items-center rounded-xl p-4 shadow-2xl space-x-4">
        <div className="relative">
          <div className="font-semibold text-left text-md">
            Jenis Keberangkatan
          </div>
          <div className="bg-white rounded-md border border-[#959595] w-[300px] h-[50px] text-black flex items-center">
            <select className="text-black font-semibold text-[15px] mx-3 outline-none flex-1">
              <option value="">Pilih waktu keberangkatan</option>
              <option value="jam">Jam</option>
              <option value="date-time">Date Time</option>
            </select>
          </div>
        </div>
        <div className="relative">
          <div className="font-semibold text-left text-md">
            Waktu Keberangkatan
          </div>
          <div className="bg-white rounded-md border border-[#959595] w-[300px] h-[50px] text-black flex items-center">
            <select className="text-black font-semibold text-[15px] mx-3 outline-none flex-1">
              <option value="">Semua Waktu</option>
              <option value="jam">Jam</option>
              <option value="date-time">Date Time</option>
            </select>
          </div>
        </div>
      </div>
      <ListCardPesan />
    </div>
  );
}

export default Kolom2;
