"use client";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-utils";

// Componente para la paginación
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	return (
		<div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
			{/* Botón Anterior */}
			<Button
				variant="outline"
				onClick={() => { 
					onPageChange(Math.max(currentPage - 1, 1)); 
					scrollToSection("top"); // desplazamiento a la sección inicial
				}}
				disabled={currentPage === 1}
				className="h-10 px-3"
			>
				Anterior
			</Button>

			{/* Números de página */}
			{Array.from({ length: totalPages }, (_, index) => (
				<Button
					key={index}
					variant={index + 1 === currentPage ? "default" : "outline"}
					onClick={() => { 
						onPageChange(index + 1); 
						scrollToSection("top"); // desplazamiento a la sección inicial
					}}
					className="w-10 h-10 p-0"
				>
					{index + 1}
				</Button>
			))}

			{/* Botón Siguiente */}
			<Button
				variant="outline"
				onClick={() => { 
					onPageChange(Math.min(currentPage + 1, totalPages)); 
					scrollToSection("top"); // desplazamiento a la sección inicial
				}}
				disabled={currentPage === totalPages}
				className="h-10 px-3"
			>
				Siguiente
			</Button>
		</div>
	);
};

export default Pagination;
