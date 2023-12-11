import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";
import React from "react";
import img1 from "../../../public/charts/usdcad/uc-9-30min.jpg";
import img2 from "../../../public/charts/usdcad/uc-10-30min.jpg";
import img3 from "../../../public/charts/usdcad/uc-11-4h.jpg";
import img4 from "../../../public/charts/usdcad/uc-12-4h.jpg";
import img5 from "../../../public/candleStickPattern/Engulfing.jpg";
import img6 from "../../../public/charts/usdcad/uc-13-1d.jpg";

export default function TimeframesUSDCAD() {
  return (
    <main className="width-container">
      <TitleName />
      <h1>Timeframes Unveiled USDCAD</h1>

      <p>
        I break down each interval (30min to 1Day) to help navigate short term
        shifts and long-term trends.
      </p>
      <h2>Short-term Insight: The 30-Min & 1H Chart</h2>
      <img src={img1.src} alt="USDCAD 30min chart" className="img-width-para" />
      <p className="img-info-para">Fig2.1- USDCAD 30min chart</p>
      <p>
        In shorter timeframes like 30 minutes and 1 hour, it&apos;s advisable to
        wait for a sideways market, akin to what&apos;s illustrated in Fig2.1.
        Despite the overall bearish trend (which you can confirm by enabling the
        line chart on the 4-hour or daily timeframe), identifying periods of
        sideways movement can be opportune for strategic decision-making.
      </p>

      <img src={img2.src} alt="USDCAD 30min chart" className="img-width-para" />
      <p className="img-info-para">Fig2.2- USDCAD 30min chart</p>

      <p>
        Absolutely, another useful tool is enabling the 40 EMA (Exponential
        Moving Average), which can serve as an aid in identifying potential
        resistance and support levels. This can add an additional layer of
        analysis to refine your trading decisions.
      </p>

      <h2>Exploring the 4-Hour Chart</h2>
      <img src={img5.src} alt="Engulfing" className="img-width-para" />
      <p className="img-info-para">Fig2.3- Strong candlestick or engulfing</p>
      <p>
        In the 4-hour timeframe, my usual strategy involves closely monitoring
        strong candlesticks in USDCAD. I establish resistance and support levels
        based on these candlestick patterns. It&apso;s noteworthy that USDCAD
        tends not to retest as frequently as GJ does. USDCAD has a tendency to
        produce fakeouts, particularly during periods of sideways movement.
        Therefore, when planning to take trades in the 4-hour chart, I recommend
        being on the lookout for strong candlesticks as they can provide more
        reliable signals in the context of USDCAD&apso;s behavior.
      </p>
      <img src={img3.src} alt="USDCAD 4h chart" className="img-width-para" />
      <p className="img-info-para">Fig2.4- USDCAD 4h chart</p>
      <img
        src={img4.src}
        alt="USDCAD 4h chart entry"
        className="img-width-para"
      />
      <p className="img-info-para">Fig2.5- USDCAD 4h chart entry</p>

      <h2>Decoding the 1-Day Chart</h2>

      <img
        src={img6.src}
        alt="USDCAD 1D chart entry"
        className="img-width-para"
      />
      <p className="img-info-para">Fig2.5- USDCAD 1D chart entry</p>
      <p>
        I primarily utilize the 1-day chart to see the overall trend and
        gauge market volume. While I rarely execute trades in the 1-day chart, I
        pay special attention when the market experiences low volume for
        consecutive days. In such instances, I wait for
        closure of a strong candlestick before considering any potential trades.
        This approach helps me navigate the market more effectively, ensuring a
        more robust and informed decision-making process.
      </p>
      <FooterNavBtn />
    </main>
  );
}
