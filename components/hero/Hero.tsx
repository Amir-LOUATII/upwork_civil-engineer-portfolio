import { MapPin } from "lucide-react";
import HeroWrapper from "./HeroWrapper";

export default function Hero() {
  return (
    <HeroWrapper>
      <div className="h-full w-full section flex flex-col gap-4 justify-center items-start text-white !bg-transparent">
        <h1 className="text-6xl font-semibold">Omar Karoui</h1>
        <p className="text-xl text-gray-300">Civil Engineer</p>
        <div className="flex items-center gap-2 text-gray-400">
          <MapPin className="w-5 h-5" />
          <span>Hanover, Germany</span>
        </div>
      </div>
    </HeroWrapper>
  );
}
