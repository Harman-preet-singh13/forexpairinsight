import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";
import React from "react";
import img1 from "../../../public/charts/usdcad/uc-1-zone.jpg";
import img2 from "../../../public/charts/usdcad/uc-2-zone.jpg";
import img3 from "../../../public/charts/usdcad/uc-3-zone.jpg";


export default function UnderstandingZoneUSDCAD() {
  return (
    <main className="width-container">
      <TitleName />
      <h1>Understanding Zone in USDCAD</h1>
      <p>
        Understanding major zones is crucial when entering any trade. If you
        examine USDCAD on higher timeframes such as 1 day and 1 week, you&apos;ll
        notice that most of the time, it tends to stay in a sideways market.
        This characteristic makes it an excellent currency for swing trading.{" "}
      </p>
      <img src={img1.src} alt="USDCAD zone1" className="img-width-para" />
      <p className="img-info-para">Fig2.1-USDCAD zone</p>

      <p>
        Here are some important zone to note for weekly charts-
        <strong>1.46626</strong>,{" "} 
        <strong>1.38500</strong>,{" "}
        <strong>1.31000</strong>,{" "}
        <strong>1.23000</strong>, and{" "}
        <strong>1.20689</strong>.  
      </p>
      <p>Zone 1.46626 is strong resistance area and 1.20689 is strong support
        area.
      </p>

      <img src={img2.src} alt="USDCARD resistance zone" className="img-width-para" />
      <p className="img-info-para">Fig2.2-USDCAD&apos;s 1.46626 resistance zone</p>

      <img src={img3.src} alt="USDCARD support zone" className="mt-10 img-width-para" />
      <p className="img-info-para">Fig2.3-USDCAD&apos;s 1.20689 support zone</p>
      <FooterNavBtn />
    </main>
  );
}
