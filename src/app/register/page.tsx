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
    <div className="flex flex-col h-[650px] bg-gray-100">
      <Navbar />
      <div
        className="absolute inset-0 h-[730px] bg-cover bg-center opacity-100"
        style={{ backgroundImage: 'url("/img/bg/m.png")' }}
      ></div>
      <div className="flex flex-col">
        <p className="text-[30px] text-white z-10 font-bold text-left px-16 mt-16 my-[10px]">
          Selamat Datang!
        </p>
      </div>
      <div>
        <p className="relative font-semibold text-white z-10 text-[15px] mx-16 mb-1">
          Masuk Data Diri Anda
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 bg-white z-10 p-4 mx-12 rounded-xl h-[390px]">
          <form className="flex flex-col h-full">
            <div className="flex-1 mb-[28px]">
              <input
                className="w-[280px] mx-1 px-3 py-2 border border-gray-300 rounded-xl"
                type="text"
                placeholder="Nama Lengkap"
              />
            </div>

            <div className="relative mb-[28px]">
              <div className="flex items-center border border-gray-300 rounded-xl w-[280px] mx-1">
                <span className="flex-shrink-0 px-4 py-2 text-gray-500 bg-gray-200 border-r border-gray-300 rounded-l-xl">
                  +62
                </span>
                <input
                  className="w-[280px] px-3 py-2 rounded-r-xl "
                  type="text"
                  placeholder="Nomor Whatsapp"
                />
              </div>
            </div>

            <div className="mb-[28px]">
              <input
                className="w-[280px] mx-1 px-3 py-2 border border-gray-300 rounded-xl"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-[28px]">
              <input
                className="w-[280px] mx-1 px-3 py-2 border border-gray-300 rounded-xl"
                type="password"
                placeholder="Password"
              />
            </div>
            <Link href="/login">
              <button
                type="submit"
                className="w-[283px] h-[50px] text-white bg-[#E3B02B] py-2 rounded mb-[15px]"
              >
                Daftar
              </button>
            </Link>
            <div>
              <p className="font-semibold text-[14px]">
                Sudah Punya Akun?
                <Link href={"/login"}>
                  <span className="text-[#E3B02B]"> Masuk Sini Disini</span>
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="col-span-2 p-4 mx-24 -mt-[50px]">
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
