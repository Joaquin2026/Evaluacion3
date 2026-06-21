# Sport Store - Inventario Deportivo

<<<<<<< HEAD
### 1. Contexto del Cliente ficticio
El cliente de este proyecto es "SportStore", una tienda local e independiente dedicada a la comercialización de indumentaria, calzado y accesorios deportivos de diversas marcas. Actualmente, el negocio opera a través de ventas presenciales en su sucursal y mediante canales digitales informáticos como redes sociales (Instagram y mensajes de WhatsApp).

### 2. Necesidad o Problemática Detectada
A través de un análisis del modelo operativo del cliente, se identificaron los siguientes puntos críticos que afectan su crecimiento y estabilidad financiera:
* **Gestión de Inventario Arcaica:** El control de las existencias de productos se realiza de forma manual utilizando cuadernos o plantillas de hojas de cálculo (Excel) que no se actualizan en tiempo real. 
* **Quiebres de Stock Frecuentes:** Debido a la falta de sincronización entre las ventas presenciales y los pedidos por redes sociales, el cliente vende constantemente artículos que ya no se encuentran físicamente en bodega, generando cancelaciones, devoluciones y descontento en los consumidores.
* **Falta de Visibilidad de Productos Críticos:** El administrador no posee un sistema visual que le alerte de manera inmediata cuándo un producto de alta rotación (como zapatillas de running o camisetas) se ha quedado sin stock (unidades en 0), lo que ralentiza el proceso de reabastecimiento con los proveedores.
* **Incertidumbre en Costos de Importación:** Gran parte del catálogo técnico es importado en divisas extranjeras (USD), y al no contar con un conversor integrado que automatice el cálculo a pesos chilenos (CLP) según el tipo de cambio del día, la fijación de precios de venta suele ser inexacta o desactualizada.

## Descripción informativa de Sport Store

Sport Store es una tienda de deportes enfocada en el control de inventario. La aplicación permite:

- Mostrar productos deportivos por categoría: **calzado**, **ropa** y **accesorios**.
- Buscar productos por nombre.
- Filtrar productos por categoría.
- Identificar rápidamente productos con stock agotado (`stock: 0`).
- Preparar un formulario de stock deshabilitado como base para un CRUD futuro.

## Datos iniciales

=======
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

>>>>>>> feature-documentacion
El archivo `src/datos/productosBase.json` contiene un arreglo con 4 productos de ejemplo. Cada producto incluye:

- `id`
- `nombre`
- `categoria`
- `precio`
- `stock`

Uno de los productos tiene `stock: 0` para que la interfaz pueda manejar la alerta de agotado.

<<<<<<< HEAD
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


## Prompts utilizados

1. **Primer prompt para iniciar el proyecto y un poco de contexto del caso**
hola necesito iniciar un proyecto desde cero para una SPA utilizando React y Vite en una carpeta llamada Evaluacion3. el proyecto sera para un cliente ficticio llamado "Sport Store" una tienda de deportes que necesita controlar su inventario. 

2. **Solicitud para crear el archivo JSON inicial**
   - "Ahora para el proyecto Sport Store necesito un archivo de datos iniciales en formato json llamado 'productosBase.json', que debe estar dentro de una subcarpeta llamada 'datos' que esta dentro de src/. Debe contener un array con 4 productos deportivos de ejemplo con las propiedades: id, nombre, categoria(calzado,ropa,accesorios), precio y stock. Asegurate de que un producto tenga stock 0 para manejar alertas en la interfaz"

3. **Solicitud para estructurar la interfaz modular**
   - "Necesito estructurar la interfaz modular de la SPA. Por favor, genérame el código para los siguientes componentes dentro de la subcarpeta componentes que estara dentro de la carpeta src/ y necesito los siguientes componentes: 1. BarraNavegacion.jsx, 2. FiltrosBusqueda.jsx (con inputs para buscar por texto y filtrar por categoría), 3. TarjetaProducto.jsx (que reciba props y avise si el stock está agotado), 4. ListaProductos.jsx (para mapear las tarjetas) y 5. FormularioStock.jsx (un formulario básico deshabilitado para planificar el CRUD futuro). Por último, muéstrame cómo conectar todo en 'src/App.jsx' manejando el estado de los filtros con useState. Ademas de que necesito que desaparezca el archivo app.css y el index.css ya que no lo necesito"

=======
## Prompts utilizados

1. **Solicitud para crear el archivo JSON inicial**
   - "Ahora para el proyecto Sport Store necesito un archivo de datos iniciales en formato json llamado 'productosBase.json', que debe estar dentro de una subcarpeta llamada 'datos' que esta dentro de src/. Debe contener un array con 4 productos deportivos de ejemplo con las propiedades: id, nombre, categoria(calzado,ropa,accesorios), precio y stock. Asegurate de que un producto tenga stock 0 para manejar alertas en la interfaz"

2. **Solicitud para estructurar la interfaz modular**
   - "Necesito estructurar la interfaz modular de la SPA. Por favor, genérame el código para los siguientes componentes dentro de la subcarpeta componentes que estara dentro de la carpeta src/ y necesito los siguientes componentes: 1. BarraNavegacion.jsx, 2. FiltrosBusqueda.jsx (con inputs para buscar por texto y filtrar por categoría), 3. TarjetaProducto.jsx (que reciba props y avise si el stock está agotado), 4. ListaProductos.jsx (para mapear las tarjetas) y 5. FormularioStock.jsx (un formulario básico deshabilitado para planificar el CRUD futuro). Por último, muéstrame cómo conectar todo en 'src/App.jsx' manejando el estado de los filtros con useState. Ademas de que necesito que desaparezca el archivo app.css y el index.css ya que no lo necesito"

3. **Solicitud actual para crear el README**
   - "Ahora necesitamos agregar el archivo README.md fuera de la carpeta src/ y necesito que pongas los prompts que se acabaron de ocupar y la estructura del texto informativo de Sport Store"

>>>>>>> feature-documentacion
## Cómo ejecutar

```bash
npm install
npm run dev
```

Esto abrirá la SPA en modo de desarrollo y permitirá probar los filtros y la visualización de productos.
