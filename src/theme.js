import { StyleSheet } from 'react-native'

export const colores = {
  azul: '#4f46e5',
  azulOsc: '#3730a3',
  fondo: '#f3f4f6',
  blanco: '#ffffff',
  texto: '#1f2937',
  gris: '#6b7280',
  borde: '#e5e7eb',
  rojo: '#dc2626',
  azulClaro: '#eef2ff',
}

// Estilos reutilizados por casi todas las pantallas
export const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colores.fondo,
  },
  contenido: {
    padding: 20,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: colores.texto,
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: colores.gris,
    marginBottom: 20,
  },
  card: {
    backgroundColor: colores.blanco,
    borderRadius: 16,
    padding: 22,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  etiqueta: {
    fontSize: 13,
    fontWeight: '600',
    color: colores.gris,
    marginBottom: 6,
  },
  input: {
    borderWidth: 2,
    borderColor: colores.borde,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: colores.texto,
    marginBottom: 16,
  },
  btnPrimario: {
    backgroundColor: colores.azul,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  btnPrimarioTexto: {
    color: colores.blanco,
    fontSize: 16,
    fontWeight: '700',
  },
  btnSecundario: {
    backgroundColor: colores.borde,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  btnSecundarioTexto: {
    color: colores.texto,
    fontSize: 16,
    fontWeight: '700',
  },
  resultado: {
    marginTop: 22,
    padding: 20,
    backgroundColor: colores.azulClaro,
    borderRadius: 12,
    alignItems: 'center',
  },
  resultadoEtiqueta: {
    fontSize: 12,
    fontWeight: '700',
    color: colores.azulOsc,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  resultadoValor: {
    fontSize: 38,
    fontWeight: '800',
    color: colores.azulOsc,
    marginTop: 4,
  },
  error: {
    color: colores.rojo,
    fontWeight: '600',
    fontSize: 15,
  },
})
