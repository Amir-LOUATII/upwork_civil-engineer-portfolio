import Image from "next/image";
import heroImage from "@/assets/hero.png";
interface HeroWrapperProps {
  children: React.ReactNode;

  className?: string;
}

export default function HeroWrapper({
  children,
  className = "",
}: HeroWrapperProps) {
  return (
    <section className={`w-full min-h-screen relative ${className}`}>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroImage}
          fill
          alt={"hero background"}
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 w-full h-full bg-black opacity-50" />

      <div className="relative z-10 w-full h-screen container mx-auto">
        {children}
      </div>
    </section>
  );
}
