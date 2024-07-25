import React from "react";
import Card from "../card";

function ListCard() {
  return (
    <div className="flex flex-col ">
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
      <div className="mt-[46px] mb-[45px] flex items-center justify-center">
        <button className="bg-black text-white font-bold py-[25px] px-[100px] rounded">
          Tampilkan Lebih Banyak
        </button>
      </div>
    </div>
  );
}

export default ListCard;
