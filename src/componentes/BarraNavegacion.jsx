function BarraNavegacion({ onNavigate, onNew }) {
  return (
    <header>
      <nav className="barra-navegacion" aria-label="Barra de navegación principal">
        <div className="brand">
          <h1>Sport Store</h1>
          <p>Control de inventario deportivo</p>
        </div>

        <ul className="nav-links" role="menubar">
          <li role="none">
            <button role="menuitem" onClick={() => onNavigate && onNavigate('home')}>Inicio</button>
          </li>
          <li role="none">
            <button role="menuitem" onClick={() => onNavigate && onNavigate('inventory')}>Inventario</button>
          </li>
          <li role="none">
            <button role="menuitem" onClick={() => onNavigate && onNavigate('reports')}>Reportes</button>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="btn-primary" onClick={() => onNew && onNew()}>Nuevo</button>
        </div>
      </nav>
    </header>
  )
}

export default BarraNavegacion
