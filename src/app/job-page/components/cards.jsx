import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MapPin, Clock } from 'lucide-react';

const Cards = ({ jobs }) => (
  <div className="space-y-6">
    {jobs.map(job => (
      <div key={job.id} className="p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div className="flex-grow mb-4 sm:mb-0 sm:mr-4">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="mt-1 mb-3 text-sm">{job.description}</p>
            <div className="flex flex-wrap gap-3">
              {job.tags.map(tag => {
                let IconComponent;
                const lower = tag.toLowerCase();
                if (lower.includes('remote') || lower.includes('on-site') || lower.includes('hybrid')) IconComponent = MapPin;
                else if (lower.includes('tiempo completo') || lower.includes('part-time') || lower.includes('full-time')) IconComponent = Clock;
                return (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-gray-300">
                    {IconComponent && <IconComponent className="w-3.5 h-3.5 mr-1.5" />}
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
          <Link href={`/job-page/${job.id}`} passHref>
            <div className="whitespace-nowrap mt-2 sm:mt-0 inline-flex items-center hover:text-blue-600 font-medium cursor-pointer group">
              Aplicar
              <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </div>
        <hr className="mt-6 border-gray-200" />
      </div>
    ))}
    {jobs.length > 0 && (
      <style jsx global>{`
        .space-y-6 > div:last-child hr { display: none; }
      `}</style>
    )}
    {jobs.length === 0 && (
      <div className="text-center py-10">
        {/* …no‐jobs SVG + text… */}
      </div>
    )}
  </div>
);

export default Cards;
