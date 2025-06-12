import React from 'react';
import { Button } from '@/components/ui/button';

const Tabs = ({ categories, activeFilter, onFilterChange }) => (
  <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-3">
    {categories.map(category => (
      <Button
        key={category}
        onClick={() => onFilterChange(category)}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
          activeFilter === category
            ? 'bg-gray-800 text-white hover:bg-gray-700'
            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
        }`}
      >
        {category}
      </Button>
    ))}
  </div>
);

export default Tabs;
