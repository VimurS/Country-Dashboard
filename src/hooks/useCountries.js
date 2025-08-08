import { useState, useEffect } from 'react'

const API = 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,languages,timezones,borders,maps,cca3'

export default function useCountries() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)

    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch countries')
        return res.json()
      })
      .then((data) => {
        if (!active) return
        const mapped = data.map((c) => ({
          cca3: c.cca3,
          name: c.name?.common || '—',
          population: c.population || 0,
          region: c.region || '—',
          capital: c.capital?.[0] || '—',
          flags: c.flags?.svg || c.flags?.png || '',
          languages: c.languages || {},
          timezones: c.timezones || [],
          borders: c.borders || [],
          maps: c.maps?.googleMaps || '',
        }))
        setCountries(mapped)
        setLoading(false)
      })
      .catch((e) => {
        if (!active) return
        setError(e.message)
        setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  return { countries, loading, error }
}
