"use client";

import React, { useState, useMemo } from 'react';
import HeaderSection from './components/header';
import Tabs from './components/tabs';
import Cards from './components/cards';
import { JobData } from '@/data/MockData';

const JobsPage = () => {
  const [activeFilter, setActiveFilter] = useState("View all");

  const categories = useMemo(() => {
    const departments = JobData.map(job => job.department);
    return ["View all", ...new Set(departments)].filter(Boolean);
  }, []);

  const filteredJobs = JobData
    .filter(job =>
      activeFilter === "View all" || job.department === activeFilter
    )
    .map(job => ({
      ...job,
      description: job.resumen,
      tags: job.tags || []
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