import React from "react";
import img1 from "../../../public/charts/gj/gj-3-zone1.jpg";
import img2 from "../../../public/charts/gj/gj-4-zone2.jpg";
import img3 from "../../../public/charts/gj/gj-5-zone3.jpg";
import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";


export default function page() {
  return (
    <main className="width-container">
      <TitleName />
      <h1 className="heading">Understanding Zone in GBPJPY</h1>
      <p >
        Zones play a significant role in forex. Every currency or stock has its
        major resistance and support levels. Understanding these levels allows
        traders to make informed decisions. The unique aspect of GJ is its
        tendency to retest zones multiple times, at least twice.
      </p>
      <p>
        Understanding major zones is crucial when entering any trade. Let&apos;s
        begin with simple yet essential zones applicable to any stock or
        currency. In charts, zones that conclude with a zero hold significance.
        This is because the human mind has a natural affinity for numbers that
        end with zero and, there&apos;s a certain visual appeal to it.
      </p>
      <img src={img1.src} alt="GJ zone1" className="img-width-para" />
      <p className="img-info-para">Fig1.1-GBPJPY zone</p>
      <p>
        Here are some important zone to note for weekly charts-149.00, 156.00,
        171.00, 186.75, and 192.42
      </p>
      
      <p>
        I like to represent zones in two ways. One way is using lines as zones,
        which is more useful in 1-month, 1-week, and 1-day charts. The other way
        is by using rectangles, which is useful in smaller time phases such as 4
        hours, 1 hour, and so on.
      </p>
      <img src={img2.src} alt="GJ zone2" className="img-width-para" />
      <p className="img-info-para">Fig1.2- 4h chart by reactangle way</p>
    <p>
    Every weekend, I make changes to my charts if necessary. In TradingView, you can toggle between candlestick charts, line charts, or any other chart type of your choice. To mark important zones on the chart, I switch to line charts. This helps me identify trends, resistance, and support more effectively.
    </p>
    <img src={img3.src} alt="GJ zone2" className="img-width-para" />
      <p className="img-info-para">Fig1.3- 1D line chart</p>
    <p>
        By this way you can identify zones.
    </p>
    <FooterNavBtn />
    </main>
  );
}
