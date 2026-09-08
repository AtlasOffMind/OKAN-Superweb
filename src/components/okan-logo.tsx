import Image from "next/image";

const ASPECT = 379 / 157;

interface OkanLogoProps {
  variant?: "dark" | "light";
  className?: string;
  width?: number;
}

export function OkanLogo({
  variant = "dark",
  className,
  width = 150,
}: OkanLogoProps) {
  const height = Math.round(width / ASPECT);

  return (
    <Image
      src={variant === "light" ? "/logo-light.png" : "/logo-dark.png"}
      alt="OKAN Escuela Superior de Arte"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
}
