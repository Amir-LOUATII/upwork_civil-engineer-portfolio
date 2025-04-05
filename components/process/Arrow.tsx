import { twMerge } from "tailwind-merge";

interface ArrowProps {
  className?: string;
}

export default function Arrow({ className }: ArrowProps) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center w-12 h-12",
        className
      )}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="24" cy="24" r="24" fill="#BBBBBB" />
        <path
          d="M16 24H32M32 24L26 18M32 24L26 30"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
