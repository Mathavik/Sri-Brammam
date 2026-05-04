import React from "react";
import HeroBanner from "./HeroBanner";
import StatsSection from "./StatsSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6 gap-0">
      
      <HeroBanner />
      <StatsSection />

    </div>
  );
}