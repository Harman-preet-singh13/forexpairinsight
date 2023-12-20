import TitleName from "@/components/TitleName";
import React from "react";
import img1 from "../../../public/charts/usdcad/uc-14-box1.jpg";
import img2 from "../../../public/charts/usdcad/uc-15-candlestick1.jpg";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";

export default function USDCADInsight() {
  return (
    <main className="width-container">
      <TitleName />

      <h1>USDCAD Insight</h1>
      <h2>Personality Traits of USDCAD</h2>
      <p>
        <strong>Sideways Market</strong>: In USDCAD, it&apos;s common to see
        sideways markets where prices move horizontally instead of up or down.
        You can notice this pattern in every timeframe, and it usually happens
        after a big price swing. A simple way to spot these sideways phases is
        to check if the market activity slows down. Look for the last strong
        candlestick and use it to draw a box, indicating the range where prices
        are moving. This helps you identify times when the market is taking a
        breather and not making significant up or down movements.
      </p>
      <img src={img1.src} alt="USDCAD 4h chart" className="img-width-para" />
      <p className="img-info-para">Fig2.1- USDCAD sideways market</p>

      <p>
        <strong>Strong Candlestick</strong>: I prefer to wait for breakouts in
        the market, but I&apos;m cautious about potential fakeouts. To minimize
        the risk, I wait for the closing of a strong candlestick before
        considering any trading decisions. This approach helps ensure that the
        price movement is not just a temporary fluctuation but a more sustained
        and reliable trend.
      </p>

      <img
        src={img2.src}
        alt="USDCAD breakout entry"
        className="img-width-para"
      />
      <p className="img-info-para">Fig2.2- USDCAD breakout entry</p>

      <p className="text-slate-500"></p>
      <a
        href="https://www.harmanpreetsingh.me/"
        target="_blank"
        rel="noopener noreferrer"
      >
        For any queries please <span className="text-blue-500 underline hover:text-blue-700">contact me</span>.
       
      </a>

      <div className="mt-10 flex justify-between border-b pb-5">
        <Link className="footer-nav-btn flex" href={`TimeframesUSDCAD`}>
          <AiOutlineLeft className="m-1" />
          TimeframesUSDCAD
        </Link>
      </div>
    </main>
  );
}
