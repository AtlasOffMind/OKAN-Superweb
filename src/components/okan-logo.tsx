import Image from "next/image";

interface OkanLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function OkanLogo({
  className,
  width = 150,
  height = 60,
}: OkanLogoProps) {
  return (
    <Image
      src="/logo-okan.png"
      alt="OKAN Escuela Superior de Arte"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
}
