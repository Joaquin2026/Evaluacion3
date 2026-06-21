function TarjetaProducto({ producto }) {
  const { nombre, categoria, precio, stock } = producto

  return (
    <article className="tarjeta-producto">
      <h3>{nombre}</h3>
      <p>Categoria: {categoria}</p>
      <p>Precio: ${precio.toLocaleString()}</p>
      <p>Stock: {stock}</p>
      {stock === 0 && <strong className="alerta-agotado">AGOTADO</strong>}
    </article>
  )
}

export default TarjetaProducto
