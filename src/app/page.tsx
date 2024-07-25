import React from "react";
import Lwe from "./components/lwe";
import ListCard from "./components/homepage/listCard";
import Div4 from "./components/div4";
import Carausel3 from "./components/carausel3";
import Carausel2 from "./components/carausel2";
import Carausel1 from "./components/carausel1";

function page() {
  return (
    <div>
      <Carausel1 />
      <Lwe />
      <ListCard />
      <Carausel2 />
      <Div4 />
      <Carausel3 />
    </div>
  );
}

export default page;
