"use client";

import React from 'react';

const ManualMarca = () => {
  const pdfUrl = '/docs/ManualMarca.pdf';
  const portadaUrl = './images/Manual/ManualMarca.webp'; 

  return (
    <div className="bg-slate-300 px-4 py-10 w-full flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
        Manual de Marca
      </h2>

      {/* Imagen de portada */}
      <div className="w-full max-w-sm sm:max-w-md shadow-lg rounded-xl overflow-hidden mb-8">
        <img
          src={portadaUrl}
          alt="Portada del Manual"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-center items-center">
        <button
          onClick={() => window.open(pdfUrl, '_blank')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition w-full sm:w-auto"
        >
          Ver Manual en PDF
        </button>

        <a
          href={pdfUrl}
          download="ManualMarca.pdf"
          className="w-full sm:w-auto"
        >
          <div className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition text-center">
            Descargar Manual
          </div>
        </a>
      </div>
    </div>
  );
};

export default ManualMarca;
