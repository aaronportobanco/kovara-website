import { DataChecklist } from "@/data/MockData";
import { Check } from "lucide-react";

function CheckList() {
  return (
    <section
      aria-label="Propuesta de valor"
      id="checklist"
      className="flex flex-col md:flex-row items-center p-5 md:px-8 lg:p-16 w-full"
    >
      {/* Image Section */}
      <div className="md:w-1/2 relative mb-10 md:mb-0 pr-0 md:pr-8">
        <img
          src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80"
          alt="Modern Workspace"
          className="rounded-lg shadow-xl"
        />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-xl md:text-2xl font-heading font-bold mb-6">
          La Experiencia Informática Definitiva
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          En Kovara, creemos que el hardware adecuado puede transformar tu
          experiencia digital. Ya seas un profesional, creador o gamer, tenemos
          las herramientas que necesitas para sobresalir.
        </p>

        <div className="gap-8 flex flex-col">
          {DataChecklist.map((item, index) => (
            <ChecklistItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChecklistItem({ title, description }) {
  return (
    <div className="flex items-start">
      <div className="bg-[#3B82F6]/20 p-2 rounded-md mr-4 mt-1">
        <Check className="h-4 w-4 text-[#3B82F6]" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function YearsBadge() {
  return (
    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#3B82F6] to-[#6366F1] p-3 rounded-lg shadow-lg">
      <div className="flex items-center space-x-3">
        <div className="text-3xl font-bold">10+</div>
        <div className="text-sm">Years of Excellence in Tech</div>
      </div>
    </div>
  );
}

export default CheckList;
