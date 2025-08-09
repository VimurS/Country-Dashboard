export default function SearchBar({ value, onChange }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search countries by name..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
