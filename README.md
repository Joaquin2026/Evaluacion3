# Sport Store - Inventario Deportivo

Este proyecto es una SPA creada con React y Vite para un cliente ficticio llamado **Sport Store**. Su propósito es gestionar y mostrar el inventario de productos deportivos, con filtros de búsqueda por nombre y categoría, y mensajes de alerta cuando un producto está agotado.

## Estructura del proyecto

- `src/`
  - `componentes/`
    - `BarraNavegacion.jsx`
    - `FiltrosBusqueda.jsx`
    - `TarjetaProducto.jsx`
    - `ListaProductos.jsx`
    - `FormularioStock.jsx`
  - `datos/`
    - `productosBase.json`
  - `App.jsx`
  - `main.jsx`

> Nota: se eliminaron `src/App.css` y `src/index.css` ya que la SPA no requiere estilos globales adicionales en esta etapa.

## Descripción informativa de Sport Store

Sport Store es una tienda de deportes enfocada en el control de inventario. La aplicación permite:

- Mostrar productos deportivos por categoría: **calzado**, **ropa** y **accesorios**.
- Buscar productos por nombre.
- Filtrar productos por categoría.
- Identificar rápidamente productos con stock agotado (`stock: 0`).
- Preparar un formulario de stock deshabilitado como base para un CRUD futuro.

## Datos iniciales

El archivo `src/datos/productosBase.json` contiene un arreglo con 4 productos de ejemplo. Cada producto incluye:

- `id`
- `nombre`
- `categoria`
- `precio`
- `stock`

Uno de los productos tiene `stock: 0` para que la interfaz pueda manejar la alerta de agotado.

## Prompts utilizados

1. **Solicitud para crear el archivo JSON inicial**
   - "Ahora para el proyecto Sport Store necesito un archivo de datos iniciales en formato json llamado 'productosBase.json', que debe estar dentro de una subcarpeta llamada 'datos' que esta dentro de src/. Debe contener un array con 4 productos deportivos de ejemplo con las propiedades: id, nombre, categoria(calzado,ropa,accesorios), precio y stock. Asegurate de que un producto tenga stock 0 para manejar alertas en la interfaz"

2. **Solicitud para estructurar la interfaz modular**
   - "Necesito estructurar la interfaz modular de la SPA. Por favor, genérame el código para los siguientes componentes dentro de la subcarpeta componentes que estara dentro de la carpeta src/ y necesito los siguientes componentes: 1. BarraNavegacion.jsx, 2. FiltrosBusqueda.jsx (con inputs para buscar por texto y filtrar por categoría), 3. TarjetaProducto.jsx (que reciba props y avise si el stock está agotado), 4. ListaProductos.jsx (para mapear las tarjetas) y 5. FormularioStock.jsx (un formulario básico deshabilitado para planificar el CRUD futuro). Por último, muéstrame cómo conectar todo en 'src/App.jsx' manejando el estado de los filtros con useState. Ademas de que necesito que desaparezca el archivo app.css y el index.css ya que no lo necesito"

3. **Solicitud actual para crear el README**
   - "Ahora necesitamos agregar el archivo README.md fuera de la carpeta src/ y necesito que pongas los prompts que se acabaron de ocupar y la estructura del texto informativo de Sport Store"

## Cómo ejecutar

```bash
npm install
npm run dev
```

Esto abrirá la SPA en modo de desarrollo y permitirá probar los filtros y la visualización de productos.
