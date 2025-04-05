import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="font-bold text-lg">
            CivilEngineerPortfolio<span className="text-white">.</span>
          </h1>
          <p className="mt-2 text-lg font-semibold">Crafting Engineering</p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="bg-neutral-700 p-2 rounded-md">
              <Facebook size={16} />
            </a>
            <a href="#" className="bg-neutral-700 p-2 rounded-md">
              <Twitter size={16} />
            </a>
            <a href="#" className="bg-neutral-700 p-2 rounded-md">
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div className=" flex justify-between items-start ">
          {" "}
          {/* Middle Links */}
          <div className="text-sm space-y-2">
            <p>
              <a href="#">Intro</a>
            </p>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href="#">Portfolio</a>
            </p>
            <p>
              <a href="#">Careers</a>
            </p>
            <p>
              <a href="#">Contact us</a>
            </p>
          </div>
          {/* Right Links */}
          <div className="text-sm space-y-2">
            <p>
              <a href="#">Privacy Policy</a>
            </p>
            <p>
              <a href="#">Terms of Service</a>
            </p>
            <p>
              <a href="#">Copyright Information</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
