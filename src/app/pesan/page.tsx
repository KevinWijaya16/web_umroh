import React from "react";
import Navbar from "../components/navbar2";
import Keberangkatan from "../components/(pesan_components)/keberangkatan/page";
import Kategori from "../components/(pesan_components)/kategori/page";
import Biaya from "../components/(pesan_components)/biaya/page";
import Durasi from "../components/(pesan_components)/durasi/page";
import Footer from "../components/footer";
import Kolom2 from "../components/(pesan_components)/kolom2/page";

function Pesan() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div
        className="grid grid-cols-3 pb-32"
        style={{ backgroundImage: "url('/img/bg/bg.png')" }}
      >
        <div className="col-span-1 bg-white shadow-3xl p-4 mx-9 rounded-xl h-[1135px] my-[42px]">
          <p className="text-[#E3B02B] text-center -translate-y-4 rounded-b-xl font-semibold w-[200px] h-[50px] bg-black p-3 mx-auto">
            Filter Berdasarkan
          </p>

          <div className="font-bold text-center text-[17px] text-black mt-[25px] mb-2">
            Kota Keberangkatan
          </div>
          <Keberangkatan />

          <div className="font-bold text-center text-[17px] text-black mt-[60px] mb-2">
            Kategori Paket Umroh
          </div>
          <Kategori />

          <div className="font-bold text-center text-[17px] text-black mt-[60px] mb-2">
            Estimasi Biaya Umroh
          </div>
          <Biaya />

          <div className="font-bold text-center text-[17px] text-black mt-[60px] mb-2">
            Durasi Perjalanan
          </div>
          <Durasi />
        </div>
        <div className="col-span-2">
          <Kolom2 />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pesan;
