import { useEffect, useState } from 'react'

function FormularioStock({ selectedProduct, onSave, onClear }) {
  const [form, setForm] = useState({ id: null, nombre: '', stock: '' })

  useEffect(() => {
    if (selectedProduct) {
      setForm({ id: selectedProduct.id, nombre: selectedProduct.nombre, stock: String(selectedProduct.stock) })
    } else {
      setForm({ id: null, nombre: '', stock: '' })
    }
  }, [selectedProduct])

  useEffect(() => {
    // if creating new product, focus nombre input
    if (!selectedProduct) {
      const el = document.getElementById('productoNombre')
      if (el) el.focus()
    }
  }, [selectedProduct])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: name === 'stock' ? value : value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.nombre) return
    const stockNum = form.stock === '' ? 0 : Number(form.stock)
    if (onSave) {
      if (!form.id) {
        const newProduct = { id: Date.now(), nombre: form.nombre, stock: stockNum }
        onSave(newProduct)
        setForm({ id: newProduct.id, nombre: newProduct.nombre, stock: String(newProduct.stock) })
      } else {
        onSave({ ...form, stock: stockNum })
      }
    }
  }

  return (
    <section id="form-stock" className="formulario-stock">
      <h2>Planificación de stock</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo-formulario">
          <label htmlFor="productoNombre">Producto</label>
          <input id="productoNombre" name="nombre" type="text" value={form.nombre} onChange={handleChange} placeholder="Producto seleccionado" />
        </div>
        <div className="campo-formulario">
          <label htmlFor="productoStock">Stock</label>
          <input id="productoStock" name="stock" type="number" value={form.stock} onChange={handleChange} placeholder="Cantidad actual" />
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button type="submit" disabled={!form.nombre} className="boton-guardar">Guardar cambios</button>
          <button type="button" onClick={onClear} className="boton-limpiar">Limpiar</button>
        </div>
      </form>
    </section>
  )
}

export default FormularioStock
