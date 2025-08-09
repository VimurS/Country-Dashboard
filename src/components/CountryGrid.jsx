import CountryCard from "./CountryCard";

export default function CountryGrid({ countries, onOpen }) {
  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} onOpen={onOpen} />
      ))}
    </div>
  );
}
