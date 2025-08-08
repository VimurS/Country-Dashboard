import React from 'react'
import { formatNumber } from '../utils/formatNumber'

export default function CountryModal({ country, onClose }) {
  if (!country) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-backdrop">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full mx-4 overflow-auto shadow-lg">
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="font-semibold text-lg">{country.name}</h2>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded border hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Close
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={country.flags}
              alt={`${country.name} flag`}
              className="w-full h-60 object-cover rounded"
            />
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
              <p>
                <strong>Region:</strong> {country.region}
              </p>
              <p>
                <strong>Population:</strong> {formatNumber(country.population)}
              </p>
            </div>
          </div>

          <div>
            <p>
              <strong>Languages:</strong>{' '}
              {Object.values(country.languages).join(', ') || '—'}
            </p>
            <p className="mt-2">
              <strong>Timezones:</strong> {country.timezones.join(', ') || '—'}
            </p>
            <p className="mt-2">
              <strong>Borders:</strong>{' '}
              {country.borders.length ? country.borders.join(', ') : '—'}
            </p>
            {country.maps ? (
              <a
                href={country.maps}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 underline"
              >
                Open in Google Maps
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
