"use client";

import React from 'react';

import { motion } from "framer-motion"

const ManualMarca = () => {
  const pdfUrl = '/docs/ManualMarca.pdf';
  const portadaUrl = './images/Manual/ManualMarca.webp'; 

  return (
      <div className="bg-slate-800 px-4 py-10 w-full flex flex-col items-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center"
        >
          Manual de Marca
        </motion.h2>

        {/* Portada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="w-full max-w-sm sm:max-w-md shadow-lg rounded-xl overflow-hidden mb-8"
        >
          <img
            src={portadaUrl}
            alt="Portada del Manual"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:justify-center items-center"
        >
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
        </motion.div>
      </div>

  );
};

export default ManualMarca;
