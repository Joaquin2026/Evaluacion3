function FiltrosBusqueda({ searchText, category, onSearchTextChange, onCategoryChange }) {
  return (
    <section className="filtros-busqueda">
      <div className="filtro-item">
        <label htmlFor="searchText">Buscar</label>
        <input
          id="searchText"
          type="text"
          value={searchText}
          onChange={(e) => onSearchTextChange(e.target.value)}
          placeholder="Buscar producto..."
        />
      </div>
      <div className="filtro-item">
        <label htmlFor="category">Categoría</label>
        <select id="category" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
          <option value="todas">Todas</option>
          <option value="calzado">Calzado</option>
          <option value="ropa">Ropa</option>
          <option value="accesorios">Accesorios</option>
        </select>
      </div>
    </section>
  )
}

export default FiltrosBusqueda
