import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";
import React from "react";
import img1 from "../../../public/charts/weekly/gj-10.jpg";
import img2 from "../../../public/charts/weekly/uc-10.jpg";

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
      <h2>Weekly Analysis-10 December</h2>
      <h2>GJ Analysis</h2>

      <img
        src={img1.src}
        alt="GJ 10th Dec chart analysis"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.1- GJ 10th Dec chart analysis</p>
      <p>
        This week, the market experienced a significant meltdown, barely
        touching 178.500 before rebounding. It seems like GBPJPY will be
        entering a sideways market phase, a scenario that has occurred quite
        frequently. While I&apos;m not entirely certain, I have a hunch that it might
        remain in this sideways pattern for at least a week. Keep an eye on the
        charts for confirmation!
      </p>

      <h2>USDCAD Analysis</h2>
      <img
        src={img2.src}
        alt="USDCAD 10th Dec chart analysis"
        className="img-width-para"
      />
      <p className="img-info-para">Fig1.2- USDCAD 10th Dec chart analysis</p>
      <p>
        USDCAD is currently in a consolidation phase, resembling a box pattern.
        It has the potential to break out in either direction, but it&apso;s worth
        noting that often, the initial breakout tends to be a fakeout. Exercise
        caution and stay vigilant in your trading decisions considering this
        pattern.
      </p>
      <FooterNavBtn />
    </main>
  );
}
