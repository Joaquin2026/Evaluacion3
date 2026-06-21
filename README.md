# Sport Store - Inventario Deportivo

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

## Funcionalidades Propuestas y Escalabilidad (Planificación CRUD y API)
Para cumplir con los objetivos de crecimiento del proyecto hacia la Evaluación 4, se proyectan las siguientes implementaciones sobre esta base técnica:
* **Persistencia y Operaciones CRUD:** Se planifica la manipulación del estado global para permitir la creación de nuevos artículos deportivos mediante el formulario de entrada, la edición de stock directamente en las tarjetas y la eliminación de productos obsoletos, almacenando todo de forma local.
* **Integración con Información Externa (API):** La aplicación está diseñada estructuralmente para conectarse en la próxima etapa a una API de indicadores económicos (como Mindicador.cl). Esto aportará valor permitiendo transformar los costos de importación de los productos desde dólares (USD) a pesos chilenos (CLP) en tiempo real.

## Datos iniciales

El archivo `src/datos/productosBase.json` contiene un arreglo con 4 productos de ejemplo. Cada producto incluye:

- `id`
- `nombre`
- `categoria`
- `precio`
- `stock`

Uno de los productos tiene `stock: 0` para que la interfaz pueda manejar la alerta de agotado.

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

4. **Prompt resumen de la última etapa de mejoras**
   - "Arregla la SPA para que el formulario de stock permita seleccionar un producto, editar el stock y guardar los cambios localmente, agrega navegación funcional en la barra superior, mejora el banner de Sport Store, y haz que las tarjetas sean seleccionables y accesibles."

5. **Prompt para corregir errores y usar las imágenes reales**
   - "Revisa el código y corrige los errores de imports y datos indefinidos, carga las imágenes que se agregaron a `src/imagenes` para cada producto (camiseta, short, muñequera, zapatilla), y asegúrate de que la app compile correctamente con `npm run build`."

## Explicación General del Avance Realizado
En esta tercera evaluación, se consolidó con éxito la base técnica y estructural de la SPA utilizando React + Vite. Los avances principales corresponden a:
1. **Análisis y Diseño:** Definición clara del contexto del cliente, sus problemáticas de stock y la planificación de la arquitectura de software.
2. **Modularidad en React:** Creación y separación adecuada de responsabilidades en 5 componentes JSX reutilizables, comunicados eficientemente mediante Props.
3. **Manejo de Estado Crítico:** Implementación exitosa de React Hooks (`useState`) en el componente raíz (`App.jsx`) para controlar de forma dinámica los filtros de categorías y la barra de búsqueda en tiempo real, además de gestionar las alertas visuales para productos con stock agotado.
4. **Control de Versiones:** Mantención de un historial limpio y coherente en GitHub a través del uso de ramas de trabajo (`feature-`) integradas mediante merges hacia la rama `main`.

## Cambios recientes y funcionalidades implementadas

- Selección de producto: puedes hacer click en una tarjeta para seleccionarla; la tarjeta seleccionada se resalta.
- Edición y guardado local: el formulario de `Planificación de stock` ahora carga el producto seleccionado, permite editar `nombre` y `stock` y guardar los cambios en memoria (estado local de la app).
- Interacción accesible: las tarjetas se pueden activar con teclado (`Enter` o `Space`).
- Mejora visual: nueva barra de navegación, banner y estilos pensados para una experiencia coherente con una tienda deportiva.

## Cómo usar

1. Ejecuta la aplicación en modo desarrollo:

```bash
npm install
npm run dev
```

2. Abrir `http://localhost:5173/` (o la URL que muestre Vite).

3. Filtrar y buscar productos usando la sección de filtros.

4. Seleccionar una tarjeta de producto para editar su `nombre` o `stock` en el panel de `Planificación de stock`.

5. Pulsar `Guardar cambios` para aplicar la modificación en la sesión (estado local).

Nota: los cambios se guardan en memoria del cliente; para persistencia remota se integrará un backend o almacenamiento local en próximas iteraciones.

