import FooterNavBtn from "@/components/FooterNavBtn";
import TitleName from "@/components/TitleName";
import React from "react";

export default function Weekly() {
  return (
    <main className="width-container">
      <TitleName />
      <h1>Weekly Market Insight</h1>
      <p className="italic">
        "Consistency is the key to Success"
      </p>
      <p>
        Welcome to "Weekly Market Insights," where I deliver concise yet
        comprehensive analyses of market trends, predictions, and the latest
        news. Stay informed and empowered as we navigate the dynamic world of
        trading together.
      </p>
      <FooterNavBtn />
    </main>
  );
}
