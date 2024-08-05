import React from "react";
import Image from "next/image";
import Link from "next/link";
import ceklis from "../../../public/img/ceklis.svg";
import people2 from "../../../public/img/people2.svg";
import car from "../../../public/img/car.svg";
import kabah from "../../../public/img/kabah.svg";
import Navbar from "../components/navbar";

function Page() {
  return (
    <div className="flex flex-col h-[630px] bg-gradient-custom">
      <Navbar />
      <div
        className="absolute inset-0 h-screen bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("/img/bg/m.png")' }}
      ></div>
      <div className="flex flex-col">
        <p className="text-[30px] text-black font-bold text-left px-16 mt-16 my-[10px]">
          Selamat Datang!
        </p>
      </div>
      <div>
        <p className="font-semibold text-[15px] mx-16 mb-1">Masukan akun</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 bg-white p-4 mx-12 my-3 rounded-xl">
          <form>
            <div className="mb-[28px]">
              <input
                className="w-[280px] mx-1 px-3 py-2 border border-gray-300 rounded-xl"
                type="text"
                placeholder="Nomor Whatsapp atau Email"
              />
            </div>
            <div className="mb-[28px]">
              <input
                className="w-[280px] mx-1 px-3 py-2 border border-gray-300 rounded-xl"
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

        <div className="col-span-2 p-4 mx-24 -mt-[120px] my-auto">
          <div className="flex flex-col gap-y-10">
            <div className="text-black flex items-center">
              <Image src={ceklis} alt="Icon" className="h-12 mr-4" />
              <div className="flex flex-col">
                <a href="#" className="text-black text-[20px] font-semibold">
                  Lorem Ipsum Dolor Sit Amet
                </a>
                <a href="#" className="text-black text-[15px]">
                  Lorem Ipsum Dolor Sit AmetLorem Ipsum <br /> Dolor Sit Amet
                </a>
              </div>
            </div>

            <div className="text-black flex items-center">
              <Image src={people2} alt="Icon" className="h-12 mr-4" />
              <div className="flex flex-col">
                <a href="#" className="text-black text-[20px] font-semibold">
                  Lorem Ipsum Dolor Sit Amet
                </a>
                <a href="#" className="text-black text-[15px]">
                  Lorem Ipsum Dolor Sit AmetLorem Ipsum <br /> Dolor Sit Amet
                </a>
              </div>
            </div>

            <div className="text-black flex items-center">
              <Image src={car} alt="Icon" className="h-12 mr-4" />
              <div className="flex flex-col">
                <a href="#" className="text-black text-[20px] font-semibold">
                  Lorem Ipsum Dolor Sit Amet
                </a>
                <a href="#" className="text-black text-[15px]">
                  Lorem Ipsum Dolor Sit AmetLorem Ipsum <br /> Dolor Sit Amet
                </a>
              </div>
            </div>

            <div className="text-black flex items-center">
              <Image src={kabah} alt="Icon" className="h-12 mr-4" />
              <div className="flex flex-col">
                <a href="#" className="text-black text-[20px] font-semibold">
                  Lorem Ipsum Dolor Sit Amet
                </a>
                <a href="#" className="text-black text-[15px]">
                  Lorem Ipsum Dolor Sit AmetLorem Ipsum <br /> Dolor Sit Amet
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
