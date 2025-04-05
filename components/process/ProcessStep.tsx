import { twMerge } from "tailwind-merge";

interface ProcessStepProps {
  label: string;
  className?: string;
}

export default function ProcessStep({ label, className }: ProcessStepProps) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center w-32 h-32 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gray-100 text-center",
        className
      )}
    >
      <p className="text-sm md:text-base font-medium px-2 text-black">
        {label}
      </p>
    </div>
  );
}
