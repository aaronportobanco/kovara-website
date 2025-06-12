"use client";

import React, { useState, useMemo } from 'react';
import HeaderSection from './components/header';
import Tabs from './components/tabs';
import Cards from './components/cards';
import { JobData } from '@/data/MockData';

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
    <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <HeaderSection />

        <Tabs
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <Cards jobs={filteredJobs} />
      </div>
    </div>
  );
};

export default JobsPage;