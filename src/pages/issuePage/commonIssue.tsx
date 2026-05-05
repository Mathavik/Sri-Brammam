import React from "react";
import SubscribeSection from "../homePage/SubscribeSection";
import { MagazineGallery } from "./issues";

export default function CommonIssue() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6 gap-0">

      <MagazineGallery/>
      <div className="mt-6"></div>

      <SubscribeSection />

    </div>
  );
}