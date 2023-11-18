import React from "react";
import img1 from "../../../public/charts/gj/gj-9-30min.jpg";
import img2 from "../../../public/charts/gj/gj-10-30min.jpg";
import img3 from "../../../public/charts/gj/gj-13-4h.jpg";
import img4 from "../../../public/charts/gj/gj-14-4h.jpg";
import img5 from "../../../public/charts/gj/gh-14-1d.jpg";
import FooterNavBtn from "@/components/FooterNavBtn";

export default function page() {
  return (
    <main className="width-container">
      <h1>Timeframes Unveiled: A Deep Dive from 30 Minutes to Daily Charts</h1>
      <p>
        Dive into the world of trading timeframes in 'Timeframes Unveiled.' From
        quick 30-minute snapshots to the broader daily view, I break down each
        interval to help navigate short-term shifts and long-term trends.
      </p>
      <h2>Short-term Insight: The 30-Min & 1H Chart</h2>
      <p>
        In the this timeframe, my strategy is quite simple: stick with the trend
        and candlestick patterns.
      </p>
      <p>
        {" "}
        In Fig 1.1, I am continuing with the previous resistance, providing
        numerous entry points. Based on your style, you can choose your entry.
      </p>
      <img
        src={img1.src}
        alt="Entry in short-temr"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.1- 30min chart entry</p>
      <p>For me, I am going to take a position on the first retest.</p>
      <img
        src={img2.src}
        alt="Entry in short-term"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.2- My entry</p>

      <h2>4 Hours Unfolded: Exploring the 4-Hour Chart</h2>
      <p>
        In the 4-hour chart, there are two things I do before taking a position.
        The very first is a retest. If the market is retesting the resistance or
        support and moving in the direction of the trend, the next step is
        enabling the 40 EMA indicator on your chart.
      </p>
      <img
        src={img3.src}
        alt="40 EMA working as resistance"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.3- 40 EMA working as resistance</p>

      <img
        src={img4.src}
        alt="40 EMA working as support"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.3- 40 EMA working as support</p>
      <p>
        As you can see in the 4-hour chart, the 40 EMA works as resistance or
        support. My entry will be when market touch 40 EMA So, using a
        combination of these two techniques, you can make trades in the 4-hour
        timeframe.
      </p>
      <h2>Daily Dynamics: Decoding the 1-Day Chart</h2>
      <p>
        Typically, I prefer utilizing the daily chart to assess the overall
        direction of the market. As part of my daily routine, I make it a point
        to examine the candlestick pattern from the preceding day, specifically
        during the active Japanese market hours at 06:30 IST.
      </p>
      <img
        src={img5.src}
        alt="Checking trend using line chart"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.4- Checking trend using line chart</p>
      <p>
        This habitual analysis serves as a crucial element in my strategy,
        aiding me in identifying and understanding the prevailing trend in the
        market.
      </p>
      <FooterNavBtn />
    </main>
  );
}
