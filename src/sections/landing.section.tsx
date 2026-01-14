"use client";

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
    <section className="h-[130dvh] bg-gradient-landing pt-24">
      <div className="flex items-center justify-center gap-6 font-mono text-[#FDFCEB]">
        <div className="flex items-center flex-col">
          <span className="text-8xl">{timeLeft.days}</span>

          <p className="text-4xl">jours</p>
        </div>

        <span className="text-9xl pb-8">:</span>

        <div className="flex items-center flex-col">
          <span className="text-8xl">{formatNumber(timeLeft.hours)}</span>

          <p className="text-4xl">heures</p>
        </div>

        <span className="text-9xl pb-8">:</span>

        <div className="flex items-center flex-col">
          <span className="text-8xl">{formatNumber(timeLeft.minutes)}</span>

          <p className="text-4xl">minutes</p>
        </div>

        <span className="text-9xl pb-8">:</span>
        <div className="flex items-center flex-col">
          <span className="text-8xl">{formatNumber(timeLeft.seconds)}</span>

          <p className="text-4xl">secondes</p>
        </div>
      </div>
    </section>
  );
};
