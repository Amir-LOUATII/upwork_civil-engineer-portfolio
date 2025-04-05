"use client";

import { Link } from "@/lib/paths";
import { useEffect, useState } from "react";
import { NavLink } from "./NavLink";

interface DesktopNavProps {
  links: Link[];
  lang: string;
}

export function DesktopNav({ links }: DesktopNavProps) {
  const [activeSection, setActiveSection] = useState<string>("#home");
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    console.log(href);

    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(href);
    }
  };
  useEffect(() => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, []);
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
        const buffer = 100; // Buffer to make the detection more user-friendly
        if (
          scrollPosition >= section.top - buffer &&
          scrollPosition < section.bottom - buffer
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Add scroll  listener
    window.addEventListener("scroll", handleScroll);
    // Initial check for active section
    handleScroll();

    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      window.removeEventListener("scroll", handleScroll);

      document.documentElement.style.scrollBehavior = "";
    };
  }, [links]);
  return (
    <div className={`flex items-center   gap-5`}>
      {links.map((link) => (
        <NavLink
          key={link.id}
          href={link.href}
          isActive={activeSection === link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          text={link.text}
        />
      ))}
    </div>
  );
}
