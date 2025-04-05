import { links } from "@/lib/paths";
import { DesktopNav } from "./DesktopNav";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

export default function Navbar() {
  return (
    <header className="bg-navy-900 sticky top-0 z-50 shadow-lg px-4 sm:px-16">
      <nav className="container mx-auto relative">
        <div className="flex justify-between items-center py-4">
          <Logo name={"Omar Karoui"} />

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <DesktopNav links={links} lang={"en"} />
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <MobileNav links={links} />
          </div>
        </div>
      </nav>
    </header>
  );
}
