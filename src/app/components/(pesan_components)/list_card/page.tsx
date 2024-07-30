import React from "react";
import Link from "next/link";
import Card from "../../card";
import Kolom2 from "../kolom2/page";

function ListCardPesan() {
  return (
    <div className="flex flex-col ">
      <p className="text-md text-black font-semibold text-left mt-2 mb-6">
        List Paket Umroh Yang Tersedia
      </p>
      <div className="grid grid-cols-2 gap-x-10 gap-y-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default ListCardPesan;
