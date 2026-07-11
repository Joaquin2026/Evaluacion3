import test from 'node:test'
import assert from 'node:assert/strict'
import { convertirPrecio, convertirPrecioClpAUsd, formatearPrecio } from '../src/utils/precios.js'

test('convierte valores en USD a CLP con la tasa indicada', () => {
  assert.equal(convertirPrecio(10, 1000), 10000)
})

test('devuelve 0 para valores inválidos de entrada', () => {
  assert.equal(convertirPrecio('', 1000), 0)
  assert.equal(convertirPrecio('abc', 1000), 0)
})

test('convierte valores en CLP a USD con la tasa indicada', () => {
  assert.equal(convertirPrecioClpAUsd(10000, 1000), 10)
})

test('formatea precios con separadores y signo de pesos', () => {
  assert.equal(formatearPrecio(125000), '$125.000')
})
