import Link from "next/link";

interface NavigationItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

export function NavigationItem({
  icon,
  label,
  href,
  isActive = false,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg transition-colors max-w-60 shadow ${
        isActive
          ? "bg-[#d1d1d1] text-black"
          : "bg-[#0c0c0c] text-white hover:bg-[#5e5e5e]"
      }`}
    >
      <div
        className={`rounded-lg w-10 h-10 flex items-center justify-center ${
          isActive ? "bg-black text-white" : "bg-[#4a4a4a]"
        }`}
      >
        {icon}
      </div>
      <span className="text-base font-medium flex-1 p-2">{label}</span>
    </Link>
  );
}
