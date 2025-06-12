"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Clock } from 'lucide-react';
import { JobData } from '@/data/MockData'; // Import JobData

// Helper function to create tags from job properties
const createJobTags = (job) => {
  const tags = [];
  if (job.remote) {
    tags.push("100% remote");
  } else if (job.location && job.location.toLowerCase() !== 'remoto') {
    tags.push(job.location); // Or a more generic "On-site" / "Hybrid" if preferred
  }
  if (job.type) {
    tags.push(job.type); // e.g., "Tiempo Completo"
  }
  return tags;
};

const JobsPage = () => {
  const [activeFilter, setActiveFilter] = useState("View all");

  // Dynamically generate categories from JobData
  const categories = useMemo(() => {
    const departments = JobData.map(job => job.department);
    return ["View all", ...new Set(departments)].filter(Boolean); // Filter out any undefined/null departments
  }, []);

  const filteredJobs = JobData.filter(job =>
    activeFilter === "View all" || job.department === activeFilter
  ).map(job => ({
    ...job,
    description: job.resumen, // Map resumen to description
    tags: createJobTags(job) // Create tags dynamically
  }));

  return (
    <div className="min-h-screen bg-[#F9F5F2] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <span className="inline-block bg-white border border-gray-300 rounded-full px-4 py-1 text-sm font-medium text-gray-700 mb-4">
            Estamos contratando!
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Sé parte de nuestra misión
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos buscando personas apasionadas para unirse a nuestra misión. Valoramos
            jerarquías planas, comunicación clara y plena propiedad y responsabilidad.
          </p>
        </header>

        {/* Filter Section */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                ${activeFilter === category
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Job List Section */}
        <div className="space-y-6">
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div className="flex-grow mb-4 sm:mb-0 sm:mr-4">
                  <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                  <p className="text-gray-600 mt-1 mb-3 text-sm">{job.description}</p> {/* Use mapped description */}
                  <div className="flex flex-wrap gap-3">
                    {job.tags.map(tag => {
                      let IconComponent;
                      const lowerTag = tag.toLowerCase();
                      if (lowerTag.includes('remote') || lowerTag.includes('on-site') || lowerTag.includes('hybrid') || job.location && lowerTag.includes(job.location.toLowerCase())) IconComponent = MapPin;
                      else if (lowerTag.includes('tiempo completo') || lowerTag.includes('part-time') || lowerTag.includes('full-time')) IconComponent = Clock;

                      return (
                        <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-600 border border-gray-300">
                          {IconComponent && <IconComponent className="w-3.5 h-3.5 mr-1.5 text-gray-500" />}
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <Link href={`/job-page/${job.id}`} passHref>
                  <div className="whitespace-nowrap mt-2 sm:mt-0 inline-flex items-center text-gray-800 hover:text-blue-600 font-medium cursor-pointer group">
                    Aplicar
                    <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </div>
              <hr className="mt-6 border-gray-200" />
            </div>
          ))}
          {/* Remove the last hr */}
          {filteredJobs.length > 0 && (
             <style jsx global>{`
              .space-y-6 > div:last-child hr { display: none; }
            `}</style>
          )}

          {filteredJobs.length === 0 && (
            <div className="text-center py-10">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2zm3-9V3a2 2 0 00-2-2H5a2 2 0 00-2 2v4M15 5V3a2 2 0 012-2h4a2 2 0 012 2v4" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No hay ofertas de trabajo</h3>
              <p className="mt-1 text-sm text-gray-500">No hay posiciones que coincidan con tu filtro actual. Prueba con una categoría diferente o vuelve más tarde.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;