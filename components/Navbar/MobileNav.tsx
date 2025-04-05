"use client";

import { Link } from "@/lib/paths";
import { useEffect, useState } from "react";
import { MobileMenu } from "./MobileMenu";

interface MobileNavProps {
  links: Link[];
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = links.map((link) => {
        const element = document.getElementById(link.href.replace("#", ""));
        if (!element) return { id: link.href, top: 0, bottom: 0 };

        const rect = element.getBoundingClientRect();
        return {
          id: link.href,
          top: rect.top + scrollPosition,
          bottom: rect.bottom + scrollPosition,
        };
      });

      // Find the current active section
      for (const section of sections) {
        const buffer = 100;
        if (
          scrollPosition >= section.top - buffer &&
          scrollPosition < section.bottom - buffer
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(href);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <MobileMenu
        isOpen={isOpen}
        toggleMenu={() => setIsOpen(!isOpen)}
        links={links}
        activeSection={activeSection}
        handleLinkClick={handleLinkClick}
      />
    </div>
  );
}
