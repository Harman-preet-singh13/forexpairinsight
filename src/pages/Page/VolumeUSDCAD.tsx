import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";
import React from "react";

export default function VolumeUSDCAD() {
  return (
    <main className="width-container">
      <TitleName />
      <h1>Trade With Volume</h1>
      <p>
        Knowing when the market is active and when it is not can make a lot of
        difference. Starting with the Japanese market opening builds the
        foundation for the rest of the day.
      </p>
      <p>
        You&apos;re likely to observe movement in USDCAD around 10:30 IST. However, I
        usually wait until the 4-hour candlestick closes at 13:30 IST. The real
        action tends to happen during the USA market opening, which occurs from
        18:30 IST to 22:30 IST. Typically, I make my trades either at 13:30 IST
        or 18:30 IST, aligning with these significant market events.
      </p>
      <p>
        Important times to note are <strong>10:30</strong>,{" "}
        <strong>13:30</strong>, <strong>18:30</strong>, <strong>19:30</strong>,
        and <strong>22:30 IST</strong>. During these time market is most liquid.
      </p>
      
      <p>14:30-16:30 IST- Europe market</p>
      <p>18:30-19:30 IST- USA market</p>
      <p>Here, I am mentioning summer time.</p>
      <FooterNavBtn />
    </main>
  );
}
