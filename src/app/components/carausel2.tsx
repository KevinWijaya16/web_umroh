"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function Carausel2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className="flex flex-col bg-black h-[405px] items-start justify-start">
      <p className="text-white mx-[46px] my-[30px] w-[205px] h-[29px]">
        Gallery Kegiatan
      </p>
      <div className="w-full">
        <div>
          <Slider {...settings}>
            <div className="px-10 bg-center">
              <Image
                className="w-[328px] h-[218px] rounded-lg"
                src="/img/carausel2/sholat.jpeg"
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
            <div className="px-10 bg-center">
              <Image
                className="w-[328px] h-[218px] rounded-lg"
                src="/img/carausel2/u1.jpg"
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
            <div className="px-10 bg-center">
              <Image
                className="w-[328px] h-[218px] rounded-lg"
                src="/img/carausel2/u3.jpg"
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
            <div className="px-10 bg-center">
              <Image
                className="w-[328px] h-[218px] rounded-lg"
                src="/img/carausel2/u4.webp"
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
            <div className="px-10 bg-center">
              <Image
                className="w-[328px] h-[218px] rounded-lg"
                src="/img/carausel2/u2.jpg"
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Carausel2;
