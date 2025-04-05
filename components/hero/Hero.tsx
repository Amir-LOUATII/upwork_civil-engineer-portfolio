import React from "react";
import HeroWrapper from "./HeroWrapper";

export default function Hero() {
  return (
    <HeroWrapper>
      <div className="h-full w-full py-10 flex justify-start items-center">
        <p className="text-6xl text-white font-semibold">About.</p>
      </div>
    </HeroWrapper>
  );
}
