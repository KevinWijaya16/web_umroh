import React from "react";
import Card from "../card";
import Link from "next/link";

function ListCard() {
  return (
    <div
      className="flex flex-col"
      style={{ backgroundImage: "url('/img/bg/bg.png')" }}
    >
      <p className="text-md text-black font-semibold text-left px-10 mt-2 mb-6">
        List Paket Umroh Yang Tersedia
      </p>
      <div className="grid grid-cols-3 gap-x-10 gap-y-12 mx-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Link href="/pesan">
        <div className="mt-[46px] mb-[45px] flex items-center justify-center">
          <button className="bg-black text-white font-bold py-[25px] px-[100px] rounded">
            Tampilkan Lebih Banyak
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ListCard;
