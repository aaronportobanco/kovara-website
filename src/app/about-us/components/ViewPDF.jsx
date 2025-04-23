"use client";

import React from 'react';

const ManualMarca = () => {
  const pdfUrl = '/assets/docs/ManualMarca.pdf';
  const portadaUrl = './images/Manual/ManualMarca.webp'; 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Manual de Marca</h2>

      <div className="w-full max-w-md shadow-lg rounded-xl overflow-hidden mb-8">
        <img
          src={portadaUrl}
          alt="Portada del Manual"
          className="w-full object-cover"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => window.open(pdfUrl, '_blank')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Ver Manual en PDF
        </button>

        <a href={pdfUrl} download="ManualMarca.pdf">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition">
            Descargar Manual
          </button>
        </a>
      </div>
    </div>
  );
};

export default ManualMarca;
