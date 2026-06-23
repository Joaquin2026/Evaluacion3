function TarjetaProducto({ producto, onSelect, selected, onShowImage }) {
  const { nombre, categoria, precio, stock } = producto
  // map categories to available example images in src/imagenes
  const defaults = {
    calzado: '2084308839416_2.jpg',
    ropa: 'OIP (1).jpg',
    accesorios: 'OIP.jpg',
  }

  let imagenSrc = null
  if (producto.imagen) {
    try {
      imagenSrc = new URL(`../imagenes/${producto.imagen}`, import.meta.url).href
    } catch {
      imagenSrc = null
    }
  }
  if (!imagenSrc) {
    try {
      const file = defaults[categoria] || '2084308839416_2.jpg'
      imagenSrc = new URL(`../imagenes/${file}`, import.meta.url).href
    } catch {
      imagenSrc = ''
    }
  }

  return (
    <article
      className={`tarjeta-producto ${selected ? 'selected' : ''}`}
      onClick={() => onSelect && onSelect(producto)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onSelect && onSelect(producto)
      }}
    >
      <img
        src={imagenSrc}
        alt={nombre}
        className="tarjeta-icono"
        onClick={(e) => {
          e.stopPropagation()
          onShowImage && onShowImage(imagenSrc, nombre)
        }}
      />
      <div className="tarjeta-contenido">
        <h3>{nombre || 'Sin nombre'}</h3>
        <p className="categoria-producto">Categoría: {categoria || '—'}</p>
        <p>Precio: {typeof precio === 'number' ? `$${precio.toLocaleString()}` : precio ? `$${Number(precio).toLocaleString()}` : '—'}</p>
        <p>Stock: {stock != null ? String(stock) : '—'}</p>
        {stock === 0 ? (
          <strong className="alerta-agotado">AGOTADO</strong>
        ) : (
          <span className="stock-disponible">Disponible</span>
        )}
      </div>
    </article>
  )
}

export default TarjetaProducto
