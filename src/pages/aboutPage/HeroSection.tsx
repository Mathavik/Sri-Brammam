import React from "react";
import HeroBanner from "./HeroBanner";
import SubscribeSection from "../homePage/SubscribeSection";
import StatsSection from "./StatsSection";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen mt-28 md:mt-60">

      <HeroBanner />
      <StatsSection />
      <div className="mt-6"></div>

      <SubscribeSection />

    </div>
  );
}