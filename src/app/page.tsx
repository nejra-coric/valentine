"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [noHover, setNoHover] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#fff5f7] via-[#fce7f3] to-[#fef7f0]">
      {/* Decorative floating hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="heart-float heart-delay-1 absolute left-[10%] top-[15%] text-3xl text-rose-300/60">♥</span>
        <span className="heart-float-slow heart-delay-2 absolute right-[12%] top-[25%] text-2xl text-rose-400/50">♥</span>
        <span className="heart-float heart-delay-3 absolute left-[20%] top-[60%] text-xl text-rose-300/40">♥</span>
        <span className="heart-float-slow heart-delay-4 absolute right-[25%] top-[70%] text-2xl text-rose-400/50">♥</span>
        <span className="heart-float heart-delay-5 absolute left-[8%] bottom-[20%] text-2xl text-rose-300/50">♥</span>
        <span className="heart-float-slow absolute right-[8%] bottom-[25%] text-3xl text-rose-400/40">♥</span>
        <span className="heart-float heart-delay-2 absolute left-[75%] top-[10%] text-xl text-rose-300/50">♥</span>
        <span className="heart-float-slow heart-delay-4 absolute left-[5%] top-[45%] text-2xl text-rose-400/40">♥</span>
      </div>

      <main className="relative flex min-h-screen min-h-[100dvh] flex-col items-center justify-center px-4 py-8 pb-[env(safe-area-inset-bottom)] sm:px-6 sm:py-16">
        <div className="glow-rose w-full max-w-2xl rounded-3xl bg-white/70 p-6 shadow-xl backdrop-blur-sm sm:p-10 md:p-14">
          <p className="mb-4 text-center font-[family-name:var(--font-cormorant)] text-base tracking-wide text-rose-700/90 sm:mb-6 sm:text-lg md:text-xl">
            I have one question for you...
          </p>

          <h1 className="font-[family-name:var(--font-great-vibes)] text-center text-4xl leading-tight text-rose-700 sm:text-5xl md:text-6xl lg:text-7xl">
            Do you want to be my Valentine?
          </h1>

          <p className="mt-6 text-center font-[family-name:var(--font-cormorant)] text-base text-rose-600/80 sm:mt-8 sm:text-lg">
            Say yes and I&apos;ll show you something made just for you.
          </p>

          <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
            <Link
              href="/valentine"
              className="glow-gold flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-4 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-white shadow-lg transition-all duration-300 active:scale-[0.98] sm:min-h-0 sm:flex-initial sm:min-w-[160px] sm:hover:scale-105 sm:hover:from-rose-600 sm:hover:to-rose-700 sm:hover:shadow-xl"
            >
              Yes, always
            </Link>
            <button
              type="button"
              onMouseEnter={() => setNoHover(true)}
              onMouseLeave={() => setNoHover(false)}
              onTouchStart={() => setNoHover(true)}
              onTouchEnd={() => setNoHover(false)}
              className={`flex min-h-[48px] flex-1 items-center justify-center rounded-full border-2 border-rose-300 px-6 py-4 font-[family-name:var(--font-cormorant)] text-lg font-medium text-rose-600 transition-all duration-300 active:scale-[0.98] sm:min-h-0 sm:flex-initial sm:min-w-[160px] ${
                noHover
                  ? "translate-x-3 translate-y-2 sm:translate-x-8 sm:translate-y-4"
                  : "hover:border-rose-400 hover:bg-rose-50/50"
              }`}
            >
              {noHover ? "Sure you don't?" : "Hmm..."}
            </button>
          </div>
        </div>

        <p className="mt-8 text-center font-[family-name:var(--font-cormorant)] text-sm text-rose-500/70 sm:mt-10">
          ♥ With love, for you only ♥
        </p>
      </main>
    </div>
  );
}
