import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 z-10">
      <Image
        src="/images/logo/logo.webp"
        alt="Logo de Kovara"
        width={18}
        height={27}
      />
      <span className="text-foreground text-base font-bold leading-7 tracking-[-0.08px]">
        Kovara
      </span>
    </div>
  );
};

export default Logo;
