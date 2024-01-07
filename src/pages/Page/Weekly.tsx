import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";
import React from "react";
import img1 from "../../../public/charts/weekly/gj-07.jpg";
import img2 from "../../../public/charts/weekly/uc--07.jpg";

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
        alt="GJ 7th Jan chart analysis"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.1- GJ 7th Jan chart analysis</p>
      <p>
        This is the third time that GJ has approached this resistance level(184.00). In
        my experience, a breakout often occurs on the third attempt. However,
        before considering any trade, it's wise to wait for a retest
      </p>

      <h2>USDCAD Analysis</h2>
      <img
        src={img2.src}
        alt="USDCAD 7th Jan chart analysis"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.2- USDCAD 7th Jan chart analysis</p>
      <p>
        USDCAD is currently trading within the range of 1.38800 to 1.33200. Wait
        for a breakout confirmed by the closing of a strong candlestick.
      </p>
      <FooterNavBtn />
    </main>
  );
}
