import React from "react";
import FooterNavBtn from "@/components/FooterNavBtn";


export default function page() {
  return (
    <div className="width-container">
      <h1 className="heading">Getting started.</h1>
     
        <div>
        <p className="para">
          Welcome to the ForexPairInsight! Before we dive into the intricacies
          of trading, let's take a moment to understand the "why" behind this
          journey, inspired by Simon Sinek's wisdom in his book{" "}
          <a
            href="https://www.amazon.in/Start-Why-Leaders-Inspire-Everyone/dp/0241958229/ref=sr_1_2?crid=1MFFQMEWIGCPP&keywords=start+with+why&qid=1699612880&sprefix=startwith%2Caps%2C227&sr=8-2"
            target="_blank"
            rel="noopener noreferrer"
            className=" underline "
          >
            "Start with Why."
          </a>
        </p>
        <p className="para">
          In the world of trading, having a strong purpose is like having a
          compass guiding you through the markets' twists and turns, helping you
          stay focused and motivated. So, why am I creating this website?
        </p>
        <p className="para">
          Simply put, I want to share my insights on trading. Beyond treating
          stocks and currency as mere lines of code, I believe there's a deeper
          layer. The movements of stocks and currency are influenced by news,
          and the timing of trades. I see each currency or stock as having its
          own distinct personality, experiencing both good and bad times.
        </p>
        <p className="para">
          Sometimes, it revisits the zone or resistance, while at other
          times, it charts its own course without a second glance. Every stock
          and currency has its unique traits, with different resistance zones.
          To keep things manageable, I've narrowed my focus to two currencies:
          GBPJPY and USDCAD.
        </p>
        
        <p className="para">
          Even if you haven't traded these currencies before, don't worry. What
          I'm explaining here is more about understanding the personality of
          these currencies. The same principles can be apply to
          your favorite stock or currency. So, let's embark on this journey
          together, armed with knowledge and a shared understanding of the
          basics. Happy exploring!
        </p>
      </div>
      <FooterNavBtn />
    </div>
  );
}
