import React from "react";
import Navbar from "./components/navbar";
import SimpleSlider from "./components/carausel";
import Lwe from "./components/lwe";

function page() {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <Lwe />
      <div className="flex flex-col min-h-screen bg-white">
        <p className="text-md text-black font-semibold text-left px-10 mt-2">
          List Paket Umroh Yang Tersedia
        </p>
        <div
          className="flex-1 bg-center"
          style={{ backgroundImage: "url('/img/bg/bg.png')" }}
        >
          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[66px] p-[35px] rounded-sm">
            {/* Card 1 */}
            <div className="bg-white shadow-3xl rounded-lg overflow-hidden p-4 ">
              <div className="flex">
                <div className=" flex flex-col justify-center w-[75%]">
                  <h3 className="text-lg font-bold text-[14px]">
                    Umroh Dream Exclusive Plus Kereta Cepat 10 ...
                  </h3>
                  <p className="font-semibold text-[#E3B02B]">Rp 39.5jt</p>
                </div>
                <img
                  src="/img/bg/umroh.jpg" // Ganti dengan URL gambar card
                  alt="Card img 1"
                  className="w-[71px%] h-[46px]"
                />
              </div>
              <div className="text-center text-black bg-white border border-black w-full rounded-xl">
                Ini Bar
              </div>
              <div className="grid grid-cols-2">
                <p>ini hotel</p>
                <p>ini tanggal</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-3xl rounded-lg overflow-hidden">
              <div className="flex">
                <div className="p-4 flex flex-col justify-center w-1/2">
                  <h3 className="text-lg font-bold">Paket 2</h3>
                  <p className="text-gray-600">
                    Deskripsi singkat tentang paket umroh 2.
                  </p>
                </div>
                <img
                  src="/img/umroh.jpg" // Ganti dengan URL gambar card
                  alt="Card img 2"
                  className="w-1/2 h-auto"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-3xl rounded-lg overflow-hidden">
              <div className="flex">
                <div className="p-4 flex flex-col justify-center w-1/2">
                  <h3 className="text-lg font-bold">Paket 3</h3>
                  <p className="text-gray-600">
                    Deskripsi singkat tentang paket umroh 3.
                  </p>
                </div>
                <img
                  src="/img/umroh.jpg" // Ganti dengan URL gambar card
                  alt="Card img 3"
                  className="w-1/2 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
