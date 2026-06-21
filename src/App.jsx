import { useState } from 'react'
import BarraNavegacion from './componentes/BarraNavegacion'
import FiltrosBusqueda from './componentes/FiltrosBusqueda'
import ListaProductos from './componentes/ListaProductos'
import FormularioStock from './componentes/FormularioStock'
import productosBase from './datos/productosBase.json'

function App() {
  const [searchText, setSearchText] = useState('')
  const [category, setCategory] = useState('todas')

  const productosFiltrados = productosBase.filter((producto) => {
    const textoCoincide = producto.nombre.toLowerCase().includes(searchText.toLowerCase())
    const categoriaCoincide = category === 'todas' || producto.categoria === category
    return textoCoincide && categoriaCoincide
  })

  return (
    <div className="app-container">
      <BarraNavegacion />
      <main>
        <FiltrosBusqueda
          searchText={searchText}
          category={category}
          onSearchTextChange={setSearchText}
          onCategoryChange={setCategory}
        />
        <ListaProductos productos={productosFiltrados} />
        <FormularioStock />
      </main>
    </div>
  )
}

export default App
