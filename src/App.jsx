import React, { useState, useMemo, useEffect } from 'react'
import useCountries from './hooks/useCountries'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CountryGrid from './components/CountryGrid'
import CountryModal from './components/CountryModal'

export default function App() {
  const { countries, loading, error } = useCountries()
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')

    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return countries
    return countries.filter((c) => c.name.toLowerCase().includes(q))
  }, [countries, query])

  return (
    <div className="min-h-screen flex flex-col">
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main className="p-6 lg:p-12 flex-1">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <SearchBar value={query} onChange={setQuery} />
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {filtered.length} countries
          </div>
        </div>

        {loading && <div className="py-32 text-center">Loading countries...</div>}
        {error && <div className="py-16 text-center text-red-500">{error}</div>}

        {!loading && !error && <CountryGrid countries={filtered} onOpen={setSelected} />}

        <CountryModal country={selected} onClose={() => setSelected(null)} />
      </main>

      <footer className="py-4 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        Data from REST Countries • Built with React & Tailwind
      </footer>
    </div>
  )
}
