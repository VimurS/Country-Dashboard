export default function CountryCard({ country, onOpen }) {
  return (
    <article className="country-card" onClick={() => onOpen(country)}>
      <div className="flag-container">
        {country.flags ? (
          <img src={country.flags} alt={`${country.name} flag`} loading="lazy" />
        ) : (
          <div>No flag</div>
        )}
      </div>
      <div className="country-info">
        <h3 title={country.name}>{country.name}</h3>
        <p>Capital: {country.capital || "—"}</p>
        <p>Region: {country.region || "—"}</p>
        <p>Population: {country.population.toLocaleString()}</p>
      </div>
    </article>
  );
}
