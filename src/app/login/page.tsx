import React from "react";

function Page() {
  return (
    <div className="flex flex-col h-[550px] bg-gradient-custom">
      <div
        className="absolute inset-0 h-screen bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("/img/bg/m.png")' }}
      ></div>
      <div className="flex flex-col ">
        <p className="text-md text-black font-semibold text-left px-16 mt-28">
          Selamat Datang !
        </p>
      </div>
      <div>
        <p className="font-normal text-[15px] mx-16">Masuk Akun</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 bg-white p-4 mx-12 my-3 rounded-xl">
          <form>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                placeholder="Nomor Whatsapp atau Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-[290px] h-[50px] text-white bg-[#E3B02B] py-2 rounded "
            >
              Masuk
            </button>
          </form>
        </div>
        <div className="col-span-2 bg-white p-4 mb-auto">
          {/* Isi dari kolom kanan */}
          Kolom Kanan
        </div>
      </div>
    </div>
  );
}

export default Page;
