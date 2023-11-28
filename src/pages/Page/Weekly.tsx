import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";
import React from "react";

export default function Weekly() {
  return (
    <main className="width-container">
      <TitleName />
      <h1 className="heading">Weekly Market Insight</h1>
      <p className="italic">&quot;Consistency is the key to Success&quot;</p>
      <p >
        Welcome to &quot;Weekly Market Insights,&quot; Being consistent is better than
        relying solely on luck.
      </p>
      <p>
        That&apos;s precisely why I&apos;ve decided to provide a weekly update on GBPJPY
        and USDCAD. Each week, I&apos;ll be sharing insights into trends,
        predictions, and relevant news to keep you well-informed and
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

      <p>
        
      </p>
      <FooterNavBtn />
    </main>
  );
}
