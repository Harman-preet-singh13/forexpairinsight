"use client";
import React from "react";
import img1 from "../../public/images/landing-page-img.jpg";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Head from "next/head";

export default function page() {
  return (
    <>
      <Head>
        <title>ForexPairInsight</title>
      </Head>
      <main className="width-container">
        <h1 className="heading">About me.</h1>
        <img
          className="bg-slate-500"
          src={img1.src}
          alt="landing page's image"
        />

        <div className="flex justify-center">
          <p className="para ">
            I'm Harmanpreet Singh, hailing from Jalandhar, Punjab, India. I am a
            web developer and trader.
            <br></br>I embarked on this wild trading journey with one simple
            goal: making those sweet, sweet money! So, I decided to start with a
            demo account because who wants to lose money, right?
            <br></br>I distinctly remember my first trade not going as planned,
            and that was a bit discouraging. But instead of giving up, I
            persisted and continued taking more trades.
            <br></br>I soon realized that successful trading involved more than
            just luck. I had to invest time in learning. So, I enrolled in
            courses, read books, and focused on studying the market rather than
            relying solely on indicators.
            <br></br>
            Despite my efforts, I was still facing losses more often than I'd
            like. Then, I stumbled upon 'Trading Zone' by Mark Douglas. The more
            I read it, the more I grasped that trading is primarily a mental
            game. It's not just about indicators or skill; it's about having the
            right mentality.
            <br></br>
            So, I did a 180 with my trading mindset and started watching the
            market. Instead of chasing every shiny object out there, I focused
            on my trusty companions, USDCAD and GBPJPY.
            <br></br>
            Now, after a year on this trading journey, I'm here to share what
            I've learned. Let's embark on this journey with a touch of
            seriousness and a lot of trading insights! 🚀💸
            <br></br>
            <a
              href="https://www.harmanpreetsingh.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Here is my{" "}
              <span className="text-blue-500 underline">portfolio</span>. Feel
              free to contact me.
            </a>
            <br></br>I am committed to providing you with{" "} 
            <Link
            className=" font-bold underline"
            href="Page/Weekly"
            >
            weekly
            </Link>
            {" "}updates on the
            charts. I deliver concise yet comprehensive analyses of market
            trends, predictions, and the latest news. Stay informed and
            empowered as we navigate the dynamic world of trading together.
          </p>
        </div>

        <Link
          className="footer-nav-btn flex justify-end"
          href="Page/getting-started"
        >
          Getting started
          <AiOutlineRight className="m-1" />
        </Link>
      </main>
    </>
  );
}
