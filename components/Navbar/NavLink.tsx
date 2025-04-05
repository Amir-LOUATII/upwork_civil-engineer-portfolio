import Link from "next/link";

interface NavLinkProps {
  href: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  text: string;
  isRTL?: boolean;
  isMobile?: boolean;
}

export function NavLink({
  href,
  isActive,
  onClick,
  text,

  isMobile,
}: NavLinkProps) {
  if (isMobile) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`
          capitalize text-lg tracking-wide transition duration-300 py-2 px-4 w-full text-center mx-1 block
          ${
            isActive
              ? "text-amber-400 font-medium bg-navy-800"
              : "text-white hover:text-amber-300 hover:bg-navy-800"
          }
        `}
      >
        {text}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        capitalize text-lg tracking-wide transition duration-300 py-2 relative block mx-1
        ${
          isActive
            ? "text-amber-400 font-medium"
            : "text-white hover:text-amber-300"
        }
      `}
    >
      {text}
      {isActive && (
        <span className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-amber-400 rounded-full" />
      )}
    </Link>
  );
}
