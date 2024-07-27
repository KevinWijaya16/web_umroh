import React from "react";
import Image from "next/image";
import ranjang from "../../../public/img/ranjang.svg";
import plane from "../../../public/img/plane.svg";
import lokasi from "../../../public/img/lokasi.svg";
import kalender from "../../../public/img/kalender.svg";
import hari from "../../../public/img/hari.svg";
import hotel from "../../../public/img/hotel.svg";

function Card() {
  return (
    <div>
      {/* <div className="" style={{ backgroundImage: "url('/img/bg/bg.png')" }}> */}
      <div className="bg-white shadow-3xl rounded-lg  p-4 ">
        <div className="flex mb-[12px]">
          <div className=" flex flex-col justify-center w-[75%]">
            <h3 className="font-bold text-[90%]">
              Umroh Dream Exclusive Plus Kereta Cepat 10 ...
            </h3>
            <p className="font-semibold text-[#E3B02B] text-2xl">Rp 39.5jt</p>
          </div>
          <img
            src="/img/bg/umroh.jpg"
            alt="Card img 1"
            className="w-[120px] h-[75px] rounded-lg"
          />
        </div>
        <div className="text-center font-semibold text-sm text-black border border-black w-full rounded-xl gradient-box mb-[10px]">
          <button>Tersisa 5 Paket</button>
        </div>

        <div className="grid grid-cols-2 ">
          <div className="col-span-1 flex flex-col space-y-1">
            <div className="flex items-center">
              <Image src={ranjang} alt="Icon" className="mx-2 w-5 h-5" />
              <p className="text-black text-[12px]">Satu Kamar 4 Orang</p>
            </div>
            <div className="flex items-center">
              <Image src={plane} alt="Icon" className="mx-2 w-5 h-5" />
              <p className="text-black text-[12px]">Garuda</p>
            </div>
            <div className="flex items-center">
              <Image src={lokasi} alt="Icon" className="mx-2 w-5 h-5" />
              <p className="text-black text-[12px]">Jakarta, +2 kota</p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col space-y-1">
            <div className="flex items-center ">
              <Image src={kalender} alt="Icon" className="mx-2 w-5 h-5" />
              <p className="text-black text-[12px]">10 sep 2023</p>
            </div>
            <div className="flex items-center">
              <Image src={hari} alt="Icon" className="mx-2 w-5 h-5" />
              <p className="text-black text-[12px]">9 Hari</p>
            </div>
            <div className="flex items-center">
              <Image src={hotel} alt="Icon" className="mx-2 w-5 h-5" />
              <p className="text-black text-[12px]">Hotel</p>
            </div>
            <div className="flex items-center space-x-1 justify-end px-2">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Card;
