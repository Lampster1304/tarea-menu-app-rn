// ════════════════════════════════════════════════════════════════
//  Traductor de números a letras en español (1 a 1000)
//  Hecho 100% a mano, SIN usar ninguna API ni librería externa.
// ════════════════════════════════════════════════════════════════

const UNIDADES = [
  '', 'uno', 'dos', 'tres', 'cuatro', 'cinco',
  'seis', 'siete', 'ocho', 'nueve',
]

// Casos especiales del 10 al 29 (en español no siguen un patrón regular)
const ESPECIALES = {
  10: 'diez', 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce',
  15: 'quince', 16: 'dieciséis', 17: 'diecisiete', 18: 'dieciocho',
  19: 'diecinueve', 20: 'veinte', 21: 'veintiuno', 22: 'veintidós',
  23: 'veintitrés', 24: 'veinticuatro', 25: 'veinticinco',
  26: 'veintiséis', 27: 'veintisiete', 28: 'veintiocho', 29: 'veintinueve',
}

// Decenas a partir del 30
const DECENAS = {
  30: 'treinta', 40: 'cuarenta', 50: 'cincuenta', 60: 'sesenta',
  70: 'setenta', 80: 'ochenta', 90: 'noventa',
}

// Centenas
const CENTENAS = {
  100: 'cien', // exacto
  200: 'doscientos', 300: 'trescientos', 400: 'cuatrocientos',
  500: 'quinientos', 600: 'seiscientos', 700: 'setecientos',
  800: 'ochocientos', 900: 'novecientos',
}

// Convierte un número del 0 al 99
function decenasYUnidades(n) {
  if (n === 0) return ''
  if (n < 10) return UNIDADES[n]
  if (n <= 29) return ESPECIALES[n]

  const decena = Math.floor(n / 10) * 10
  const unidad = n % 10
  if (unidad === 0) return DECENAS[decena]
  // 31 -> "treinta y uno"
  return `${DECENAS[decena]} y ${UNIDADES[unidad]}`
}

export function numeroALetras(numero) {
  const n = Number(numero)

  if (!Number.isInteger(n)) return 'Ingresa un número entero'
  if (n < 1 || n > 1000) return 'El número debe estar entre 1 y 1000'

  if (n === 1000) return 'mil'

  // Centenas
  if (n >= 100) {
    const centena = Math.floor(n / 100) * 100
    const resto = n % 100

    if (resto === 0) {
      // 100, 200, 300...
      return CENTENAS[centena]
    }
    // 101 -> "ciento uno"  (ojo: "cien" pasa a "ciento" cuando hay resto)
    const palabraCentena = centena === 100 ? 'ciento' : CENTENAS[centena]
    return `${palabraCentena} ${decenasYUnidades(resto)}`
  }

  // 1 a 99
  return decenasYUnidades(n)
}

// Pone la primera letra en mayúscula (para mostrar bonito)
export function capitalizar(texto) {
  if (!texto) return ''
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}
