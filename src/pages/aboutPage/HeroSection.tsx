import React from "react";
import HeroBanner from "./HeroBanner";
import StatsSection from "../homePage/StatsSection";
import SubscribeSection from "../homePage/SubscribeSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6 gap-0">

      <HeroBanner />
      <StatsSection />
      <div className="mt-6"></div>

      <SubscribeSection />

    </div>
  );
}