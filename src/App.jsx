import { useState } from 'react'
import BarraNavegacion from './componentes/BarraNavegacion'
import FiltrosBusqueda from './componentes/FiltrosBusqueda'
import ListaProductos from './componentes/ListaProductos'
import FormularioStock from './componentes/FormularioStock'
import productosBase from './datos/productosBase.json'
import bannerImg from './imagenes/banner-sport-store.svg'
import './componentes/estilos.css'
import ModalImagen from './componentes/ModalImagen'

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

  const productosFiltrados = productos.filter((producto) => {
    const textoCoincide = producto.nombre.toLowerCase().includes(searchText.toLowerCase())
    const categoriaCoincide = category === 'todas' || producto.categoria === category
    return textoCoincide && categoriaCoincide
  })

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
  }

  function scrollToId(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  function handleNavigate(target) {
    if (target === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
    if (target === 'inventory') scrollToId('main-content')
    if (target === 'reports') scrollToId('main-content')
  }

  function handleNew() {
    setSelectedProductId(null)
    // open the form section
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
        <FormularioStock
          selectedProduct={productos.find((p) => p.id === selectedProductId) ?? null}
          onSave={handleSaveProduct}
          onClear={() => setSelectedProductId(null)}
        />
      </main>
      <ModalImagen src={modalImage} alt={modalAlt} onClose={handleCloseModal} />
    </div>
  )
}

export default App
