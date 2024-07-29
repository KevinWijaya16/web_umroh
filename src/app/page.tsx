import React from "react";
import Lwe from "./components/lwe";
import ListCard from "./components/homepage/listCard";
import Div4 from "./components/div4";
import Carausel3 from "./components/carausel3";
import Carausel1 from "./components/carausel1";
import Div5putih from "./components/div5putih";
import Footer from "./components/footer";
import CenterMode from "./components/carausel2";
import Navbar from "./components/navbar";

function page() {
  return (
    <div>
      <Navbar />
      <Carausel1 />
      <Lwe />
      <ListCard />
      <CenterMode />
      <Div4 />
      <Carausel3 />
      <Div5putih />
      <Footer />
    </div>
  );
}

export default page;
