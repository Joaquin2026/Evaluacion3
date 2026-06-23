import TarjetaProducto from './TarjetaProducto'

function ListaProductos({ productos, onSelect, selectedProductId, onShowImage }) {
  if (productos.length === 0) {
    return <p>No hay productos que coincidan con los filtros.</p>
  }

  return (
    <section className="lista-productos">
      {productos.map((producto) => (
        <TarjetaProducto
          key={producto.id}
          producto={producto}
          onSelect={() => onSelect(producto)}
          selected={selectedProductId === producto.id}
          onShowImage={onShowImage}
        />
      ))}
    </section>
  )
}

export default ListaProductos
