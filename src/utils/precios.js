export function convertirPrecio(precio, tasa) {
  const valor = Number(precio)
  const tipoCambio = Number(tasa)

  if (!Number.isFinite(valor) || !Number.isFinite(tipoCambio) || valor < 0 || tipoCambio <= 0) {
    return 0
  }

  return Math.round(valor * tipoCambio)
}

export function convertirPrecioClpAUsd(precioClp, tasa) {
  const valor = Number(precioClp)
  const tipoCambio = Number(tasa)

  if (!Number.isFinite(valor) || !Number.isFinite(tipoCambio) || valor < 0 || tipoCambio <= 0) {
    return 0
  }

  return Number((valor / tipoCambio).toFixed(2))
}

export function formatearPrecio(valor) {
  const numero = Number(valor)
  if (!Number.isFinite(numero)) {
    return '$0'
  }

  return `$${Math.round(numero).toLocaleString('es-CL')}`
}
