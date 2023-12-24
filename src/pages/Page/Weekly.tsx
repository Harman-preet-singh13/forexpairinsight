import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";
import React from "react";
import img1 from "../../../public/charts/weekly/gj-24.jpg";
import img2 from "../../../public/charts/weekly/uc-24.jpg";

export default function Weekly() {
  return (
    <main className="width-container">
      <TitleName />
      <h1 className="heading">Weekly Market Insight</h1>
      <p className="italic">&quot;Consistency is the key to Success&quot;</p>
      <p>
        Welcome to &quot;Weekly Market Insights,&quot; Being consistent is
        better than relying solely on luck.
      </p>
      <p>
        That&apos;s precisely why I&apos;ve decided to provide a weekly update
        on GBPJPY and USDCAD. Each week, I&apos;ll be sharing insights into
        trends, predictions, and relevant news to keep you well-informed and
        strategically positioned in these currency pairs. Stay tuned for your
        regular dose of market updates!
      </p>
      <p>
        You can check out the latest forex news at{" "}
        <a
          className="underline"
          href="https://www.forexfactory.com/calendar"
          target="_blank"
          rel="noopener noreferrer"
        >
          forexfactory.com
        </a>
      </p>
      <h2>Weekly Analysis-24 December</h2>
      <h2>GJ Analysis</h2>

      <img
        src={img1.src}
        alt="GJ 24th Dec chart analysis"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.1- GJ 24th Dec chart analysis</p>
      <p>
        In the current scenario for GJ, there are two possibilities. The first
        is a potential breakout below the 179.00 support zone. The second is a
        scenario where the price may retest the 180.00 zone and turn bullish. If
        a breakout below 179.00 occurs, it&apos;s advisable to wait for a retest
        of this zone before considering any trading decisions. This approach
        helps confirm the strength of the breakout and reduces the risk of false
        signals.
      </p>

      <h2>USDCAD Analysis</h2>
      <img
        src={img2.src}
        alt="USDCAD 10th Dec chart analysis"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.2- USDCAD 10th Dec chart analysis</p>
      <p>
        It appears that USDCAD is exhibiting a bearish trend, at least based on
        the patterns observed in the daily and weekly candlesticks.
      </p>
      <FooterNavBtn />
    </main>
  );
}
