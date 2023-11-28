import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";
import React from "react";

export default function Weekly() {
  return (
    <main className="width-container">
      <TitleName />
      <h1>Weekly Market Insight</h1>
      <p className="italic my-5">"Consistency is the key to Success"</p>
      <p>
        Welcome to "Weekly Market Insights," Being consistent is better than
        relying solely on luck.
      </p>
      <p>
        That's precisely why I've decided to provide a weekly update on GBPJPY
        and USDCAD. Each week, I'll be sharing insights into trends,
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
