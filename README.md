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
- Crear, editar y eliminar productos desde un formulario de stock.
- Guardar los cambios de forma local mediante `localStorage`.
- Consultar un tipo de cambio de referencia desde una API externa.
- Mostrar una equivalencia automática de precios entre USD y CLP.

## Funcionalidades Propuestas y Escalabilidad (Planificación CRUD y API)
Para cumplir con los objetivos de crecimiento del proyecto hacia la Evaluación 4, se proyectan las siguientes implementaciones sobre esta base técnica:
* **Persistencia y Operaciones CRUD:** Se manipula el estado local para permitir la creación de nuevos artículos deportivos mediante el formulario, la edición de stock y la eliminación de productos obsoletos, almacenando todo de forma local.
* **Integración con Información Externa (API):** La aplicación está conectada a una API de indicadores económicos (Mindicador.cl) para transformar los costos de importación desde dólares (USD) a pesos chilenos (CLP) en tiempo real.

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
    - `ModalImagen.jsx`
    - `estilos.css`
  - `datos/`
    - `productosBase.json`
  - `imagenes/`
    - `2084308839416_2.jpg`
    - `OIP (1).jpg`
    - `OIP.jpg`
    - `OIP2.webp`
    - `banner-sport-store.svg`
  - `utils/`
    - `precios.js`
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

6. **Prompt para completar el CRUD y mejorar validación**
   - "Necesitamos arreglar los puntos del formulario para tener un CRUD completo como en FormularioStock.jsx, además de mejorar la validación de datos, bloqueando valores como stock negativo, texto no numérico o campos vacíos de forma más estricta."

7. **Prompt para integrar la API de cambio y mejorar la experiencia del formulario**
   - "Necesitamos integrar la conversión de USD a CLP de forma segura y mejorar la experiencia del formulario con mensajes de estado, navegación útil y una equivalencia automática de precios."

8. **Prompt para mejorar la navegación y la utilidad de los botones**
   - "Necesitamos arreglar en la navegación que los botones de inventario, reportes e inicio cumplan una función útil en la aplicación web, no solo ser visuales."

9. **Prompt para mejorar la experiencia visual de los productos e imágenes**
   - "Necesitamos cambiar la imagen del producto 'Short de entrenamiento' por la imagen OIP2.webp y asegurar que se vea correctamente en la tarjeta."

10. **Prompt para corregir errores de precio al alternar entre CLP y USD**
   - "Necesitamos arreglar el bug del formulario de precio para que al cambiar entre CLP y USD no se creen valores incorrectos ni se pierda la edición del precio."

## Explicación General del Avance Realizado
En esta tercera evaluación, se consolidó con éxito la base técnica y estructural de la SPA utilizando React + Vite. Los avances principales corresponden a:
1. **Análisis y Diseño:** Definición clara del contexto del cliente, sus problemáticas de stock y la planificación de la arquitectura de software.
2. **Modularidad en React:** Creación y separación adecuada de responsabilidades en 5 componentes JSX reutilizables, comunicados eficientemente mediante Props.
3. **Manejo de Estado Crítico:** Implementación exitosa de React Hooks (`useState`) en el componente raíz (`App.jsx`) para controlar de forma dinámica los filtros de categorías y la barra de búsqueda en tiempo real, además de gestionar las alertas visuales para productos con stock agotado.
4. **Control de Versiones:** Mantención de un historial limpio y coherente en GitHub a través del uso de ramas de trabajo (`feature-`) integradas mediante merges hacia la rama `main`.

## Cambios recientes y funcionalidades implementadas

- Selección de producto: puedes hacer click en una tarjeta para seleccionarla; la tarjeta seleccionada se resalta.
- CRUD funcional: el formulario permite crear, editar y eliminar productos, y los cambios se guardan localmente en memoria y en `localStorage`.
- Validación estricta: se bloquean valores inválidos como stock negativo, campos vacíos o precios no numéricos.
- Integración de API: se consulta un tipo de cambio de referencia desde Mindicador.cl para apoyar la conversión de USD a CLP.
- Navegación útil: los botones de navegación dirigen a secciones reales del inventario, incluido un bloque de reportes rápidos.
- Experiencia mejorada: el formulario muestra mensajes de estado y una etiqueta con la equivalencia automática del precio entre CLP y USD.

