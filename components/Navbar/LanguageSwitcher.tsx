import en from "@/assets/flags/en.svg";
import ar from "@/assets/flags/tn.svg";
import fr from "@/assets/flags/fr.svg";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LuCheck } from "react-icons/lu";
interface LanguageSwitcherProps {
  lang: string;
  languageNames: Record<string, string>;
  locales: string[];
}

const flagIcons: Record<string, string> = {
  en: en,
  fr: fr,
  ar: ar,
};

export function LanguageSwitcher({
  lang,
  languageNames,
  locales,
}: LanguageSwitcherProps) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const langBtnRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langMenuRef.current &&
        langBtnRef.current &&
        !langMenuRef.current.contains(event.target as Node) &&
        !langBtnRef.current.contains(event.target as Node)
      ) {
        setIsLangMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const switchLanguage = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    const currentHash = window.location.hash;
    router.push(`/${locale}${currentHash}`);
    setIsLangMenuOpen(false);
  };
  const isRtl = lang == "ar";
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-navy-800 text-white hover:bg-navy-700 transition duration-200"
        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
        ref={langBtnRef}
        aria-label={`Current language: ${languageNames[lang]}`}
        aria-expanded={isLangMenuOpen}
        aria-controls="language-menu"
      >
        <Image
          src={flagIcons[lang]}
          alt={`Flag of ${languageNames[lang]}`}
          className="w-4 h-4 min-h-4 min-w-4"
        />
        <span className="max-md:hidden">{languageNames[lang]}</span>
      </button>

      <AnimatePresence>
        {isLangMenuOpen && (
          <motion.div
            id="language-menu"
            className={`absolute top-full ${
              isRtl ? "left-0" : " right-0"
            } mt-2 border border-navy-700 rounded-lg shadow-xl z-50 overflow-hidden bg-navy-900`}
            ref={langMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="py-1 min-w-[180px]">
              {locales.map((locale) => (
                <button
                  key={locale}
                  onClick={() => switchLanguage(locale)}
                  className={`w-full px-4 py-2 flex items-center justify-start gap-2 transition duration-200 ${
                    locale === lang
                      ? "bg-navy-700 text-amber-400 font-medium"
                      : "text-gray-200 hover:bg-navy-700 hover:text-amber-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Image
                      src={flagIcons[locale] || "/flags/default.svg"}
                      alt={`Flag of ${languageNames[locale]}`}
                      className="w-6 h-6 "
                    />
                    {languageNames[locale]}
                  </span>
                  {locale === lang && <LuCheck className="h-4 w-4 ml-2" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
