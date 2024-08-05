import React from "react";
import Navbar from "./components/navbar";
import Carausel1 from "./components/carausel1";
import Lwe from "./components/lwe";
import ListCard from "./components/homepage/listCard";
import CenterMode from "./components/carausel2";
import Div4 from "./components/div4";
import Carausel3 from "./components/carausel3";
import Div5putih from "./components/div5putih";
import Footer from "./components/footer";

function Page() {
  return (
    <div style={{ overflowX: "hidden" }}>
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

export default Page;
