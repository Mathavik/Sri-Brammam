import React from "react";
import StatsSection from "./StatsSection";
import SponsorsBar from "./SponsorsBar";

import MainSection from "./main";
import MagazineSection from "./MagazineSection";
import FeaturedCategories from "./FeaturedCategories";
import TopWriters from "./TopWriters";
import SubscribeSection from "./SubscribeSection";
import EditorsPick from "./EditorsPick";


export default function Home() {
  return (
    <div className="w-full min-h-screen mt-28 md:mt-60">
      <MainSection/>
      <MagazineSection/>
      <StatsSection/>
      <EditorsPick/>
      <SponsorsBar/>
      <FeaturedCategories/>
      <TopWriters/>
      {/* <SubscribeSection/> */}

    </div>
  );
}