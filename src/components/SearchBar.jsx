import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-xl">
      <input
        type="text"
        placeholder="Search countries by name..."
        className="w-full px-4 py-3 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
