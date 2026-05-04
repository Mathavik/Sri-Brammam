import React from "react";
import StatsSection from "./StatsSection";
import SponsorsBar from "./SponsorsBar";

import MainSection from "./main";


export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6 gap-0">
      <MainSection/>
      <StatsSection/>
      <SponsorsBar/>

    </div>
  );
}