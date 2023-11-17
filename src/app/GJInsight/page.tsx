import React from "react";
import img1 from "../../../public/charts/gj/gj-15-4h.jpg";
import img2 from "../../../public/charts/gj/gh-16-4h.jpg";
import img3 from "../../../public/charts/gj/gh-17-30min.jpg";
import FooterNavBtn from "../components/FooterNavBtn";

export default function page() {
  return (
    <main className="width-container">
      <h1>GBPJPY Insight</h1>
      <p className="italic">
        "Predicting the future is a human ability; the challenge lies in the
        trouble that surprises bring. That's where it all matters."
      </p>
      <p>
        In past articles, I have shared tips that may aid you in trading.
        However, the truth remains that in trading, nothing is certain. Even if
        you execute all the right steps, there's a possibility that a trade may
        not go as planned. My approach is always to enter trades where my
        chances of winning are around 70%. Yet, once I've taken the trade, I
        remind myself that there is an equal 50% chance of winning and losing.
        Keeping these considerations in mind, I am now going to delve into the
        personality traits of GJ.
      </p>
      <h2>Personality Traits of GJ</h2>
      <p>
        <span className="text-lg font-semibold">Retest: </span>Numerous times,
        I've emphasized the significance of the term 'retest' in my previous
        articles, particularly in the context of GJ trading. However, the
        challenge arises in how to accurately identify these retracements.
      </p>
      <img src={img1.src} alt="Opening for trade" className="img-width-para" />
      <p className="img-info-para">Fig1.1- Opening for trade</p>
      <p>
        n Fig 1.1, there are two instances where the market is retesting the
        resistance zone, providing two potential entry points.
      </p>
      <img src={img2.src} alt="Bigger picture" className="img-width-para" />
      <p className="img-info-para">Fig1.2- Bigger picture</p>
      <p>
        Yet, Fig 1.2 showcases the market retesting a previous zone,
        underscoring the importance of understanding the overarching trend in
        higher timeframes like 1-hour, 4-hour, and daily charts.
      </p>
      <img src={img3.src} alt="30 min opening" className="img-width-para" />
      <p className="img-info-para">Fig1.3- 30min opening</p>
      <p>
        This is same chart but smaller timeframe Time (Red box-Time-13:30IST), as illustrated in Fig 1.3, where one can apply
        specific trading techniques for making informed entries.
      </p>
      <FooterNavBtn />
    </main>
  );
}
