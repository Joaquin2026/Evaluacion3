import { useEffect, useState } from 'react'
import BarraNavegacion from './componentes/BarraNavegacion'
import FiltrosBusqueda from './componentes/FiltrosBusqueda'
import ListaProductos from './componentes/ListaProductos'
import FormularioStock from './componentes/FormularioStock'
import productosBase from './datos/productosBase.json'
import bannerImg from './imagenes/banner-sport-store.svg'
import './componentes/estilos.css'
import ModalImagen from './componentes/ModalImagen'
import { convertirPrecio, formatearPrecio } from './utils/precios'

function App() {
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('todas')
  const [productos, setProductos] = useState(() => {
    try {
      const raw = localStorage.getItem('sportstore_productos')
      return raw ? JSON.parse(raw) : productosBase
    } catch {
      return productosBase
    }
  })
  const [selectedProductId, setSelectedProductId] = useState(null)
  const [modalImage, setModalImage] = useState(null)
  const [modalAlt, setModalAlt] = useState('')
  const [tipoCambio, setTipoCambio] = useState(null)
  const [cargaCambio, setCargaCambio] = useState(true)
  const [mensajeEstado, setMensajeEstado] = useState('')

  useEffect(() => {
    let ignore = false

    async function cargarTipoCambio() {
      try {
        const response = await fetch('https://mindicador.cl/api/dolar')
        if (!response.ok) throw new Error('No se pudo obtener el tipo de cambio')
        const data = await response.json()
        if (!ignore) {
          setTipoCambio(data?.serie?.[0]?.valor ?? null)
          setCargaCambio(false)
        }
      } catch {
        if (!ignore) {
          setTipoCambio(null)
          setCargaCambio(false)
        }
      }
    }

    cargarTipoCambio()
    return () => {
      ignore = true
    }
  }, [])

  const productosFiltrados = productos.filter((producto) => {
    const textoCoincide = producto.nombre.toLowerCase().includes(searchText.toLowerCase())
    const categoriaCoincide = category === 'todas' || producto.categoria === category
    return textoCoincide && categoriaCoincide
  })

  const totalProductos = productos.length
  const totalStock = productos.reduce((sum, producto) => sum + Number(producto.stock || 0), 0)
  const productosAgotados = productos.filter((producto) => Number(producto.stock || 0) === 0).length
  const valorInventario = productos.reduce(
    (sum, producto) => sum + Number(producto.precio || 0) * Number(producto.stock || 0),
    0,
  )

  function handleSelectProduct(producto) {
    setSelectedProductId(producto?.id ?? null)
  }

  function handleSaveProduct(updated) {
    setProductos((prev) => {
      const exists = prev.some((p) => p.id === updated.id)
      let next
      if (exists) {
        next = prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p))
      } else {
        next = [...prev, updated]
      }
      try {
        localStorage.setItem('sportstore_productos', JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
    setSelectedProductId(updated.id)
    setMensajeEstado(updated.id ? 'Producto actualizado correctamente.' : 'Producto creado correctamente.')
  }

  function handleDeleteProduct(productId) {
    setProductos((prev) => {
      const next = prev.filter((producto) => producto.id !== productId)
      try {
        localStorage.setItem('sportstore_productos', JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
    setSelectedProductId(null)
    setMensajeEstado('Producto eliminado correctamente.')
  }

  function scrollToId(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleNavigate(target) {
    if (target === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
    if (target === 'inventory') scrollToId('inventory-section')
    if (target === 'reports') scrollToId('reportes-section')
  }

  function handleNew() {
    setSelectedProductId(null)
    setMensajeEstado('Listo para crear un nuevo producto.')
    setTimeout(() => scrollToId('form-stock'), 120)
  }

  function handleShowImage(src, alt) {
    setModalImage(src)
    setModalAlt(alt || '')
  }

  function handleCloseModal() {
    setModalImage(null)
    setModalAlt('')
  }

  function handleClearForm() {
    setSelectedProductId(null)
    setMensajeEstado('Formulario limpiado. Puedes crear un producto nuevo.')
  }

  return (
    <div className="app-container">
      <BarraNavegacion onNavigate={handleNavigate} onNew={handleNew} />
      <section className="producto-destacado">
        <div>
          <h2>Gestiona tu inventario deportivo</h2>
          <p>
            Sport Store te ayuda a controlar stock de calzado, ropa y accesorios con filtros
            rápidos y alertas cuando un producto está agotado.
          </p>
          <div style={{ marginTop: 12 }}>
            <button className="cta-button" onClick={() => handleNavigate('inventory')}>Ver inventario</button>
            <button style={{ marginLeft: 12 }} className="cta-button" onClick={handleNew}>Nuevo producto</button>
          </div>
        </div>
        <img src={bannerImg} alt="Banner Sport Store" className="imagen-banner" />
      </section>
      <main id="main-content">
        <section id="reportes-section" className="resumen-inventario">
          <h2>Reportes rápidos</h2>
          <div className="resumen-grid">
            <article className="resumen-card">
              <span>Total de productos</span>
              <strong>{totalProductos}</strong>
            </article>
            <article className="resumen-card">
              <span>Unidades en stock</span>
              <strong>{totalStock}</strong>
            </article>
            <article className="resumen-card">
              <span>Productos agotados</span>
              <strong>{productosAgotados}</strong>
            </article>
            <article className="resumen-card">
              <span>Valor estimado</span>
              <strong>{formatearPrecio(valorInventario)}</strong>
            </article>
          </div>
          <p className="tipo-cambio-info">
            {cargaCambio
              ? 'Consultando tipo de cambio...'
              : tipoCambio
                ? `Precio en CLP estimado usando USD → CLP con tasa ${tipoCambio}`
                : 'No se pudo obtener la tasa de cambio en este momento.'}
          </p>
        </section>

        <section id="inventory-section">
          <FiltrosBusqueda
            searchText={searchText}
            category={category}
            onSearchTextChange={setSearchText}
            onCategoryChange={setCategory}
          />
          <ListaProductos
            productos={productosFiltrados}
            onSelect={handleSelectProduct}
            selectedProductId={selectedProductId}
            onShowImage={handleShowImage}
          />
        </section>

        <section className="estado-operacion" aria-live="polite">
          {mensajeEstado ? <p>{mensajeEstado}</p> : null}
        </section>

        <FormularioStock
          selectedProduct={productos.find((p) => p.id === selectedProductId) ?? null}
          onSave={handleSaveProduct}
          onDelete={handleDeleteProduct}
          onClear={handleClearForm}
          tipoCambio={tipoCambio}
          convertirPrecio={convertirPrecio}
        />
      </main>
      <ModalImagen src={modalImage} alt={modalAlt} onClose={handleCloseModal} />
    </div>
  )
}

export default App
