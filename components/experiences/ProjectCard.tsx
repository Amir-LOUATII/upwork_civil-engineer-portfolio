import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ProjectCard({
  imageSrc,
  title,
  text,
}: {
  text: string;
  imageSrc: string | StaticImageData;
  title: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="rounded-lg overflow-hidden mb-3">
        <Image
          src={imageSrc}
          alt="Civil engineering tunnel project"
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      </div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}
