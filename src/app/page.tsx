import React from "react";
import Navbar from "./components/navbar";
import SimpleSlider from "./components/carausel";

function page() {
  return (
    <div>
      <Navbar />
      <SimpleSlider />
      <div className="flex flex-col items-center text-center min-h-screen bg-white mt-10">
        <div className="bg-slate-400 px-10 w-[1080px] h-[131px] -translate-y-20">
          dsadafggfgag
        </div>
      </div>
    </div>
  );
}

export default page;
