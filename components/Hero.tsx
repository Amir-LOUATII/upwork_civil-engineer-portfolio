import React from "react";
import heroImage from "@/assets/hero.png";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full h-full">
        <Image src={heroImage} fill alt="hero image" priority />
      </div>
    </section>
  );
}
