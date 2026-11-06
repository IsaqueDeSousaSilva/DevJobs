export default function SearchBar({ Value, onCharge }) {
    return (
        <select className="search-section container">
            <label htmlFor="busca">Buscar Vagas</label>
            <input
            type="search"
            id="buscar"
            placeholder="Ex: React, Node, Remoto..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            />
        </select>
    );
}