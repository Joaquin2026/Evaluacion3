import { useEffect, useState } from 'react'
import { formatearPrecio } from '../utils/precios'

const categoriasPermitidas = ['calzado', 'ropa', 'accesorios']

function FormularioStock({ selectedProduct, onSave, onDelete, onClear, tipoCambio, convertirPrecio }) {
  const [form, setForm] = useState({ id: null, nombre: '', categoria: 'calzado', precioUsd: '', precioClp: '', stock: '' })
  const [errors, setErrors] = useState({})
  const [modoPrecio, setModoPrecio] = useState('clp')

  useEffect(() => {
    if (selectedProduct) {
      const precioClp = selectedProduct.precio != null ? String(selectedProduct.precio) : ''
      const precioUsd = selectedProduct.precio != null && tipoCambio
        ? String((Number(selectedProduct.precio) / Number(tipoCambio)).toFixed(2))
        : selectedProduct.precio != null ? String(selectedProduct.precio) : ''

      setForm({
        id: selectedProduct.id,
        nombre: selectedProduct.nombre ?? '',
        categoria: selectedProduct.categoria ?? 'calzado',
        precioUsd,
        precioClp,
        stock: selectedProduct.stock != null ? String(selectedProduct.stock) : '',
      })
    } else {
      setForm({ id: null, nombre: '', categoria: 'calzado', precioUsd: '', precioClp: '', stock: '' })
    }
    setErrors({})
    setModoPrecio('clp')
  }, [selectedProduct, tipoCambio])

  useEffect(() => {
    if (!selectedProduct) {
      const el = document.getElementById('productoNombre')
      if (el) el.focus()
    }
  }, [selectedProduct])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  function handlePrecioChange(e) {
    const value = e.target.value

    if (modoPrecio === 'usd') {
      const precioClp = tipoCambio && value !== ''
        ? String(convertirPrecio(value, tipoCambio))
        : ''
      setForm((f) => ({ ...f, precioUsd: value, precioClp }))
    } else {
      const precioUsd = tipoCambio && value !== ''
        ? String((Number(value) / Number(tipoCambio)).toFixed(2))
        : ''
      setForm((f) => ({ ...f, precioClp: value, precioUsd }))
    }

    setErrors((prev) => ({ ...prev, precio: '' }))
  }

  function handleChangeMode(nextMode) {
    if (nextMode === modoPrecio) return

    if (nextMode === 'clp' && tipoCambio && form.precioUsd !== '') {
      const valorClp = String(convertirPrecio(form.precioUsd, tipoCambio))
      setForm((f) => ({ ...f, precioClp: valorClp }))
    } else if (nextMode === 'usd' && tipoCambio && form.precioClp !== '') {
      const valorUsd = String((Number(form.precioClp) / Number(tipoCambio)).toFixed(2))
      setForm((f) => ({ ...f, precioUsd: valorUsd }))
    }

    setModoPrecio(nextMode)
  }

  function validateForm() {
    const nextErrors = {}

    if (!form.nombre.trim()) {
      nextErrors.nombre = 'El nombre del producto es obligatorio.'
    }

    if (!categoriasPermitidas.includes(form.categoria)) {
      nextErrors.categoria = 'Selecciona una categoría válida.'
    }

    const precioBase = modoPrecio === 'usd' ? form.precioUsd : form.precioClp
    const precioNumero = Number(precioBase)
    if (String(precioBase).trim() === '') {
      nextErrors.precio = 'El precio es obligatorio.'
    } else if (!Number.isFinite(precioNumero) || precioNumero < 0) {
      nextErrors.precio = 'El precio debe ser un número mayor o igual a 0.'
    }

    const stockNumero = Number(form.stock)
    if (form.stock.trim() === '') {
      nextErrors.stock = 'El stock es obligatorio.'
    } else if (!Number.isInteger(stockNumero) || stockNumero < 0) {
      nextErrors.stock = 'El stock debe ser un número entero mayor o igual a 0.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validateForm()) return

    const precioFinal = modoPrecio === 'usd'
      ? (tipoCambio ? convertirPrecio(form.precioUsd, tipoCambio) : Number(form.precioUsd))
      : Number(form.precioClp)
    const productoNormalizado = {
      id: form.id ?? Date.now(),
      nombre: form.nombre.trim(),
      categoria: form.categoria,
      precio: precioFinal,
      stock: Number(form.stock),
    }

    if (onSave) {
      onSave(productoNormalizado)
    }
  }

  function handleDelete() {
    if (!form.id || !onDelete) return
    onDelete(form.id)
  }

  const precioActual = modoPrecio === 'usd' ? form.precioUsd : form.precioClp
  const equivalenteTexto = tipoCambio && precioActual !== ''
    ? modoPrecio === 'usd'
      ? `Equivalente: ${formatearPrecio(Number(precioActual) * Number(tipoCambio))} CLP`
      : `Equivalente: ${formatearPrecio(Number(precioActual) / Number(tipoCambio))} USD`
    : null

  return (
    <section id="form-stock" className="formulario-stock">
      <h2>{selectedProduct ? 'Editar o eliminar producto' : 'Crear nuevo producto'}</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="campo-formulario">
          <label htmlFor="productoNombre">Producto</label>
          <input
            id="productoNombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre del producto"
          />
          {errors.nombre ? <span className="mensaje-error">{errors.nombre}</span> : null}
        </div>

        <div className="campo-formulario">
          <label htmlFor="productoCategoria">Categoría</label>
          <select id="productoCategoria" name="categoria" value={form.categoria} onChange={handleChange}>
            <option value="calzado">Calzado</option>
            <option value="ropa">Ropa</option>
            <option value="accesorios">Accesorios</option>
          </select>
          {errors.categoria ? <span className="mensaje-error">{errors.categoria}</span> : null}
        </div>

        <div className="campo-formulario">
          <label htmlFor="productoPrecio">Precio</label>
          <div className="selector-modo-precio">
            <button type="button" className={modoPrecio === 'clp' ? 'activo' : ''} onClick={() => handleChangeMode('clp')}>
              CLP
            </button>
            <button type="button" className={modoPrecio === 'usd' ? 'activo' : ''} onClick={() => handleChangeMode('usd')}>
              USD
            </button>
          </div>
          <input
            id="productoPrecio"
            name="precio"
            type="number"
            min="0"
            step="0.01"
            value={modoPrecio === 'usd' ? form.precioUsd : form.precioClp}
            onChange={handlePrecioChange}
            placeholder={modoPrecio === 'usd' ? 'Precio en USD' : 'Precio en CLP'}
          />
          {tipoCambio ? <small className="ayuda-precio">Tasa de cambio: {tipoCambio}</small> : null}
          {equivalenteTexto ? <small className="ayuda-precio">{equivalenteTexto}</small> : null}
          {errors.precio ? <span className="mensaje-error">{errors.precio}</span> : null}
        </div>

        <div className="campo-formulario">
          <label htmlFor="productoStock">Stock</label>
          <input
            id="productoStock"
            name="stock"
            type="number"
            min="0"
            step="1"
            value={form.stock}
            onChange={handleChange}
            placeholder="Cantidad actual"
          />
          {errors.stock ? <span className="mensaje-error">{errors.stock}</span> : null}
        </div>

        <div className="botones-formulario">
          <button type="submit" className="boton-guardar">{selectedProduct ? 'Guardar cambios' : 'Crear producto'}</button>
          <button type="button" onClick={onClear} className="boton-limpiar">Limpiar</button>
          {selectedProduct ? (
            <button type="button" onClick={handleDelete} className="boton-eliminar">
              Eliminar
            </button>
          ) : null}
        </div>
      </form>
    </section>
  )
}

export default FormularioStock
