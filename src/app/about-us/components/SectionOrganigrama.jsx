import Image from "next/image";

const Organigrama = () => {
  return (
    <div className="w-full px-4 py-6">
      {/* En moviles: scroll horizontal. En pantallas medianas en adelante: sin scroll */}

      <div className="overflow-x-auto md:overflow-visible">
        <div className="w-[1000px] sm:w-[1200px] md:w-full max-w-[1600px] mx-auto">
          <Image
            src="/images/Organigrama/Kovara_Organigrama.svg"
            alt="Organigrama"
            width={1600}
            height={1200}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Organigrama;
