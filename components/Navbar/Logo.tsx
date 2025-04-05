import Link from "next/link";

interface LogoProps {
  name: string;
}

export function Logo({ name }: LogoProps) {
  return (
    <h2 className="flex items-center gap-2 font-bold">
      <Link
        href={`/`}
        className="flex items-center gap-2 group transition-all duration-300 hover:opacity-95"
      >
        <span
          className={`text-xl sm:text-2xl md:text-3xl text-white group-hover:scale-[1.02] transition-transform duration-300`}
        >
          {name}
        </span>
      </Link>
    </h2>
  );
}
