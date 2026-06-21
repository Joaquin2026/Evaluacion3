function FormularioStock() {
  return (
    <section className="formulario-stock">
      <h2>Planificación de stock</h2>
      <form>
        <div className="campo-formulario">
          <label htmlFor="productoNombre">Producto</label>
          <input id="productoNombre" type="text" disabled placeholder="Producto seleccionado" />
        </div>
        <div className="campo-formulario">
          <label htmlFor="productoStock">Stock</label>
          <input id="productoStock" type="number" disabled placeholder="Cantidad actual" />
        </div>
        <button type="submit" disabled>Guardar cambios</button>
      </form>
    </section>
  )
}

export default FormularioStock
