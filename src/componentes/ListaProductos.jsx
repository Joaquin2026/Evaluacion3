import TarjetaProducto from './TarjetaProducto'

function ListaProductos({ productos }) {
  if (productos.length === 0) {
    return <p>No hay productos que coincidan con los filtros.</p>
  }

  return (
    <section className="lista-productos">
      {productos.map((producto) => (
        <TarjetaProducto key={producto.id} producto={producto} />
      ))}
    </section>
  )
}

export default ListaProductos
