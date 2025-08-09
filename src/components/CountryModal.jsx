export default function CountryModal({ country, onClose }) {
  if (!country) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{country.name}</h2>
          <button className="modal-close-btn" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="modal-body">
          <img src={country.flags} alt={`${country.name} flag`} />
          <div className="modal-details">
            <p>
              <strong>Capital:</strong> {country.capital || "—"}
            </p>
            <p>
              <strong>Region:</strong> {country.region || "—"}
            </p>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "—"}
            </p>
            <p>
              <strong>Timezones:</strong> {country.timezones?.join(", ") || "—"}
            </p>
            <p>
              <strong>Borders:</strong>{" "}
              {country.borders && country.borders.length
                ? country.borders.join(", ")
                : "—"}
            </p>
            {country.maps && (
              <p>
                <a
                  href={country.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color:"#2781ff;" }}
                >
                  Open in Google Maps
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
