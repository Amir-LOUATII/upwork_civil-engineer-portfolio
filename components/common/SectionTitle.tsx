import React from "react";

export default function SectionTitle({ text }: { text: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">{text}</h2>
  );
}
