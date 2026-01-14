"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export const LandingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-12T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
      else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section id="#" className="h-[130dvh] bg-gradient-landing pt-36 flex items-center flex-col">
      <div className="flex items-center justify-center gap-6 font-mono font-extralight text-[#FDFCEB] tracking-widest">
        <div className="flex items-center flex-col">
          <span className="text-8xl">{timeLeft.days}</span>

          <p className="text-4xl">jours</p>
        </div>

        <span className="text-8xl pb-8">:</span>

        <div className="flex items-center flex-col">
          <span className="text-8xl">{formatNumber(timeLeft.hours)}</span>

          <p className="text-4xl">heures</p>
        </div>

        <span className="text-8xl pb-8">:</span>

        <div className="flex items-center flex-col">
          <span className="text-8xl">{formatNumber(timeLeft.minutes)}</span>

          <p className="text-4xl">minutes</p>
        </div>

        <span className="text-8xl pb-8">:</span>

        <div className="flex items-center flex-col">
          <span className="text-8xl">{formatNumber(timeLeft.seconds)}</span>

          <p className="text-4xl">secondes</p>
        </div>
      </div>

      <h1 className="sr-only">Les CuicuiteDays | 12 & 13 Juin 2026</h1>

      <div className="w-full relative flex items-center justify-center">
        <div className="flex items-end flex-col font-salted text-[#FDFCEB] absolute top-[10%] left-[8%] -rotate-12">
          <span className="text-2xl">“THE BEST FESTIVAL IN THE WOLRD”</span>

          <span className="text-lg mr-3">Mick Jäger</span>
        </div>

        <Image src="/image/landing.svg" alt="Illustration représentant la direction artistique du festival Les CuicuiteDays" width={1000} height={1000} />

        <div className="flex items-center flex-col gap-4 font-salted text-[#FDFCEB] absolute top-[45%] right-[8%]">
          <span className="text-3xl">SCROLL</span>

          <svg width="16" height="117" viewBox="0 0 16 117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.81929 1C7.81929 1.12657 7.81929 1.25315 7.81929 18.0153C7.81929 34.7775 7.81929 68.1714 7.51465 101.486"
              stroke="#FDFCEB"
              strokeWidth="2"
              strokeLinecap="round"
            />

            <path
              d="M2.06695 100.898L13.5786 101.266C15.0051 101.311 15.9261 102.793 15.3353 104.093L10.2292 115.32C9.54855 116.817 7.45308 116.898 6.65803 115.459L0.25248 103.864C-0.497618 102.506 0.516526 100.849 2.06695 100.898Z"
              fill="#FDFCEB"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
