/* eslint-disable @next/next/no-img-element */
import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";
import React from "react";
import img1 from "../../../public/candleStickPattern/Engulfing.jpg";
import img2 from "../../../public/charts/usdcad/uc-4-rec.jpg";
import img3 from "../../../public/charts/usdcad/uc-5-rec.jpg";
import img4 from "../../../public/charts/usdcad/uc-6-sideways.jpg"
import img5 from "../../../public/charts/usdcad/uc-7-sideways.jpg"
import img6 from "../../../public/charts/usdcad/uc-8-sideways.jpg"

export default function ReactangleUSDCAD() {
  return (
    <main className="width-container">
      <TitleName />
      <h1>Reactangle in USDCAD</h1>
      <img src={img1.src} alt="Engulfing" className="img-width-para" />
      <p className="img-info-para">Fig2.1- Bearish and Bullish Engulfing</p>
      <p>
        A big, powerful candlestick or enguffing candlestick in USDCAD is like
        your best friend in trading. If you spot one near a resistance or
        supporting zone, just draw a line on the big part of that candle.
        It&apos;s an easy way to figure out important levels for making smart
        decisions about where prices might go.
      </p>
      <img
        src={img3.src}
        alt="USDCAD resistance zone"
        className="img-width-para"
      />
      <p className="img-info-para">Fig2.1- USDCAD resistance zone</p>

        <h2>
            Sidways
        </h2>
      <p>
        Sometimes, USDCAD gets stuck in resistance or support zones.
        The candlesticks start to get smaller, and the volume drops. This is a
        crucial time to keep a close eye on the market. It&apos;s a bit like the
        calmness before a storm. When the market experiences high volume again,
        it&apos;s likely to explode with activity. Stay alert during these quiet
        phases
      </p>
      <p>
        Here are some examples:
      </p>
      <img
        src={img5.src}
        alt="USDCAD resistance zone"
        className="img-width-para"
      />
      <p className="img-info-para">Fig2.1- USDCAD resistance zone</p>
      <img
        src={img6.src}
        alt="USDCAD resistance zone"
        className="img-width-para"
      />
      <p className="img-info-para">Fig2.1- USDCAD resistance zone</p>
      <img
        src={img4.src}
        alt="USDCAD resistance zone"
        className="img-width-para"
      />
      <p className="img-info-para">Fig2.1- USDCAD resistance zone</p>
      <FooterNavBtn />
    </main>
  );
}
