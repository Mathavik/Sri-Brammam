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
    <div className="min-h-screen bg-white flex flex-col items-center py-6 gap-0">
      <MainSection/>
      <MagazineSection/>
      <StatsSection/>
      <EditorsPick/>
      <SponsorsBar/>
      <FeaturedCategories/>
      <TopWriters/>
      <SubscribeSection/>

    </div>
  );
}