"use client";

import { useEffect, useState } from "react";

const moments = [
  { src: "/images/images-3.jpeg", alt: "Us together, smiling in the elevator", className: "moment-tall" },
  { src: "/images/images-6.jpeg", alt: "A cozy evening together", className: "moment-wide" },
  { src: "/images/images-4.jpeg", alt: "A little mirror selfie", className: "moment-portrait" },
  { src: "/images/images-1.jpeg", alt: "A candlelit celebration", className: "moment-landscape" },
  { src: "/images/images-2.jpeg", alt: "A beautiful celebration at home", className: "moment-tall" },
  { src: "/images/images-5.jpeg", alt: "A close-up of your beautiful smile", className: "moment-close" },
];

export default function Home() {
  const [bloomed, setBloomed] = useState(false);
  const [ready, setReady] = useState(false);
  const [intro, setIntro] = useState<"flower" | "heart" | "done">("flower");

  useEffect(() => {
    const flowerStart = window.setTimeout(() => setReady(true), 1000);
    const heartStart = window.setTimeout(() => setIntro("heart"), 8000);
    const pageReveal = window.setTimeout(() => setIntro("done"), 24000);
    return () => {
      window.clearTimeout(flowerStart);
      window.clearTimeout(heartStart);
      window.clearTimeout(pageReveal);
    };
  }, []);

  return (
    <main>
      {intro !== "done" && (
        <div className={`anniversary-intro${intro === "heart" ? " intro-heart" : " intro-flower"}`}>
          {intro === "flower" ? (
            <iframe className="intro-frame" title="Growing flowers" src="/flower-intro.html" />
          ) : (
            <iframe className="intro-frame" title="Growing heart animation" src="/heart-intro/index.html" />
          )}
        </div>
      )}
      <div className="page-shell">
        <header className="topbar">
          <a className="wordmark" href="#home" aria-label="One Month With You home"><span className="wordmark-heart">♡</span> little love letter</a>
          <span className="topbar-note">A tiny celebration of us <span>✳</span></span>
        </header>

        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> 01 month down <span className="eyebrow-sparkle">✳</span></p>
            <h1 id="hero-title">One month<br />of <span>my favourite</span><br />person.</h1>
            <p className="hero-note">And somehow, you’ve made all my ordinary days feel like the ones I want to remember.</p>
            <a className="memory-link" href="#little-things">A few of my favourite things <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-visual">
            <div className="hero-halo" />
            <div className="hero-photo-frame">
              <img src="/images/images-3.jpeg" alt="A favourite photo of the two of us" className="hero-photo" />
              <div className="photo-sticker" aria-hidden="true">♡</div>
            </div>
            <div className="photo-caption"><span>you + me</span><span>always a good idea</span></div>
            <span className="hero-doodle doodle-one" aria-hidden="true">✳</span>
            <span className="hero-doodle doodle-two" aria-hidden="true">✷</span>
          </div>
          <span className="hero-side-note" aria-hidden="true">THE BEGINNING OF OUR LITTLE FOREVER</span>
        </section>

        <section className="love-note" aria-label="A note for you">
          <span className="note-label">A little note for you</span>
          <div className="note-rule" />
          <p>To the girl who makes even the quiet moments feel like magic — thank you for this first little chapter. I can’t wait to keep choosing you, day after day.</p>
          <span className="note-signoff">all my love <span>♡</span></span>
        </section>

        <section className="memories" id="little-things" aria-labelledby="memories-title">
          <div className="section-heading">
            <div><p className="eyebrow"><span className="eyebrow-line" /> the little things</p><h2 id="memories-title">Our first little <span>collection.</span></h2></div>
            <p className="section-aside">A few moments, a million<br />reasons I adore you.</p>
          </div>
          <div className="photo-grid">
            {moments.map((moment) => (
              <figure className={`memory-card ${moment.className}`} key={moment.src}>
                <div className="memory-image-wrap"><img src={moment.src} alt={moment.alt} loading="lazy" /></div>
              </figure>
            ))}
          </div>
        </section>

        <section className="bloom-section" aria-labelledby="bloom-title">
          <div className="bloom-copy"><p className="eyebrow"><span className="eyebrow-line" /> a little something</p><h2 id="bloom-title">A little love <span>in bloom.</span></h2> </div>
       
          <button className={`bloom-button${bloomed ? " is-bloomed" : ""}`} onClick={() => setBloomed((value) => !value)} aria-label={bloomed ? "Close the blooming heart" : "Make a heart bloom"} aria-pressed={bloomed}>
            <span className="bloom-orbit orbit-one" /><span className="bloom-orbit orbit-two" />
            <svg className="bloom-heart" viewBox="0 0 120 110" role="img" aria-label="An animated heart">
              <path d="M60 100 C51 89 16 66 12 42 C7 14 39 5 60 30 C81 5 113 14 108 42 C104 66 69 89 60 100Z" />
            </svg>
            <span className="bloom-label">{bloomed ? "love, always" : "tap me ♡"}</span>
            {bloomed && <span className="bloom-spark spark-a">✦</span>}
            {bloomed && <span className="bloom-spark spark-b">✳</span>}
            {bloomed && <span className="bloom-spark spark-c">♡</span>}
          </button>
        </section>

        <footer className="footer"><span>one month down, all my love to go</span><span className="footer-heart">♡</span><span>made by Aryan Kuril</span></footer>
      </div>
    </main>
  );
}
