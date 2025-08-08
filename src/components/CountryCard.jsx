import React from 'react'
import { formatNumber } from '../utils/formatNumber'

export default function CountryCard({ country, onOpen }) {
  return (
    <article
      onClick={() => onOpen(country)}
      className="cursor-pointer rounded-lg overflow-hidden shadow hover:shadow-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 transition"
    >
      <div className="h-40 md:h-44 lg:h-56 w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
        {country.flags ? (
          <img
            src={country.flags}
            alt={`${country.name} flag`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="text-sm text-gray-500">No flag</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{country.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Capital: {country.capital}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Region: {country.region}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Population: {formatNumber(country.population)}
        </p>
      </div>
    </article>
  )
}
