import React from "react";
import SubscribeSection from "../homePage/SubscribeSection";
import { MagazineGallery } from "./issues";

export default function CommonIssue() {
  return (
    <div className="w-full min-h-screen mt-14 md:mt-60">

      <MagazineGallery/>
      <div className="mt-6"></div>

      <SubscribeSection />

    </div>
  );
}