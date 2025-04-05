"use client";

import { useRef } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { Link } from "@/lib/paths";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  links: Link[];
  activeSection: string;
  handleLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}

export function MobileMenu({
  isOpen,
  toggleMenu,
  links,
  activeSection,
  handleLinkClick,
}: MobileMenuProps) {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        className="text-white focus:outline-none"
        onClick={toggleMenu}
        ref={closeBtnRef}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-full lg:hidden flex flex-col items-center py-4 rounded-b-xl shadow-lg bg-white z-50 text-black"
          ref={mobileMenuRef}
        >
          {links.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              isActive={activeSection === link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              text={link.text}
              isMobile
            />
          ))}
        </div>
      )}
    </>
  );
}
