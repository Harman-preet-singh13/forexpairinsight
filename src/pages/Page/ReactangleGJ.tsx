/* eslint-disable @next/next/no-img-element */
import React from "react";
import img1 from "../../../public/charts/gj/gj--6-rectangle1.jpg";
import img2 from "../../../public/candleStickPattern/Tweezer-Top.jpg";
import img3 from "../../../public/charts/gj/gj-4-zone2.jpg";
import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";

export default function page() {
  return (
    <main className="width-container">
      <TitleName />
      <h1>Reactagles in GBPJPY</h1>
      <h2>Drawing Reactangle in GJ</h2>
      <p>
        I always draw rectangles based on the body on candlesticks. When the
        market touches the previous support or resistance and forms a tweezer
        top or bottom, I draw the rectangle around the larger body of the
        tweezer.
      </p>
      <img src={img2.src} alt="Tweezer-Top" className="img-width-para" />
      <p className="img-info-para">Fig1.1- Tweezer Top and Bottom</p>
      <p>
        When the market revisits a previous zone, there is a high probability
        that it is just retesting the zone, which serves as a good indicator of
        a potential reversal. I usually take trades when the market retests the
        tweezer.
      </p>
      <img
        src={img1.src}
        alt="Retesting previous zone"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.2- 4h chart Retesting previous zone</p>

      <p>
        <span className="text-[#ff9966]">Caution-</span> The thing with GJ is
        that most of the time, it retraces to test the zone before reversing.
        However, always keep the direction of the trend in mind when trading on
        the 1-hour chart or above. In the Fig 1.3, the market is bullish, so I
        avoided taking a short position. And focus more on taking long position.
      </p>
      <img
        src={img3.src}
        alt="Retesting previous zone"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.3- 4h chart Box </p>

      <FooterNavBtn />
    </main>
  );
}
