import { useState, useMemo, useEffect } from "react";
import useCountries from "./hooks/useCountries";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CountryGrid from "./components/CountryGrid";
import CountryModal from "./components/CountryModal";
import "./App.css";

export default function App() {
  const { countries, loading, error } = useCountries();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter((c) => c.name.toLowerCase().includes(q));
  }, [countries, query]);

  return (
    <div className="app-container">
      <Header theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />

      <main>
        <div className="search-bar-container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <SearchBar value={query} onChange={setQuery} />
          <div style={{ color: "var(--text-color)", fontSize: "0.9rem" }}>
            Showing {filtered.length} countries
          </div>
        </div>

        {loading && <div className="status-text">Loading countries...</div>}
        {error && <div className="status-text" style={{ color: "red" }}>{error}</div>}

        {!loading && !error && <CountryGrid countries={filtered} onOpen={setSelected} />}

        <CountryModal country={selected} onClose={() => setSelected(null)} />
      </main>

      <footer>
        Built with React • By Vimur Sivakumar
      </footer>
    </div>
  );
}
