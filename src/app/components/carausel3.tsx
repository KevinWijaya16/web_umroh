"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function Carausel3() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1100,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className="flex flex-col bg-black h-[405px] items-start justify-start">
      <div className="flex mx-[46px] my-[30px] w-full mb-20">
        <p className="text-white w-[205px] h-[29px]">100+ Biro Travel</p>
        <p className="text-white ml-[860px]">Mitra Kami</p>
      </div>
      <div className="w-full overflow-hidden flex justify-center">
        <div className="slider-container  max-w-[950px]">
          <Slider {...settings} className="justify-center items-center">
            <div className="px-3 bg-center">
              <Image
                className="w-[186px] h-[135px]"
                src="/img/carausel2/sholat.jpeg"
                alt="Logo"
                width={200}
                height={200}
              />
              <div className="text-white text-center mt-2">Lorem Ipsum</div>
            </div>
            <div className="px-3 bg-center">
              <Image
                className="w-[186px] h-[135px]"
                src="/img/carausel2/u1.jpg"
                alt="Logo"
                width={200}
                height={200}
              />
              <div className="text-white text-center mt-2">Lorem Ipsum</div>
            </div>
            <div className="px-3 bg-center">
              <Image
                className="w-[186px] h-[135px]"
                src="/img/carausel2/u3.jpg"
                alt="Logo"
                width={200}
                height={200}
              />
              <div className="text-white text-center mt-2">Lorem Ipsum</div>
            </div>
            <div className="px-3 bg-center">
              <Image
                className="w-[186px] h-[135px]"
                src="/img/carausel2/u4.webp"
                alt="Logo"
                width={200}
                height={200}
              />
              <div className="text-white text-center mt-2">Lorem Ipsum</div>
            </div>
            <div className="px-3 bg-center">
              <Image
                className="w-[186px] h-[135px]"
                src="/img/carausel2/u2.jpg"
                alt="Logo"
                width={200}
                height={200}
              />
              <div className="text-white text-center mt-2">Lorem Ipsum</div>
            </div>
            <div className="px-3 bg-center">
              <Image
                className="w-[186px] h-[135px]"
                src="/img/bg/umroh.jpg"
                alt="Logo"
                width={200}
                height={200}
              />
              <div className="text-white text-center mt-2">Lorem Ipsum</div>
            </div>
            <div className="px-3 bg-center">
              <Image
                className="w-[186px] h-[135px]"
                src="/img/bg/umroh2.jpeg"
                alt="Logo"
                width={200}
                height={200}
              />
              <div className="text-white text-center mt-2">Lorem Ipsum</div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Carausel3;
