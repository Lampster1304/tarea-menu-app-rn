import { useState } from 'react'
import {
  ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native'
import { colores, estilos } from '../theme'

export default function TablaScreen() {
  const [numero, setNumero] = useState('')
  const [tabla, setTabla] = useState(null)
  const [error, setError] = useState('')

  function generar() {
    const n = parseInt(numero, 10)
    if (isNaN(n)) {
      setError('Ingresa un número válido')
      setTabla(null)
      return
    }
    setError('')
    // Tabla de multiplicar hasta el 13
    const filas = []
    for (let i = 1; i <= 13; i++) {
      filas.push({ i, res: n * i })
    }
    setTabla({ base: n, filas })
  }

  return (
    <ScrollView style={estilos.pantalla} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.titulo}>Tabla de Multiplicar</Text>
      <Text style={estilos.subtitulo}>Escribe un número y muestra su tabla hasta el 13</Text>

      <View style={estilos.card}>
        <Text style={estilos.etiqueta}>Número</Text>
        <TextInput
          style={estilos.input}
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 7"
        />

        <TouchableOpacity style={estilos.btnPrimario} onPress={generar}>
          <Text style={estilos.btnPrimarioTexto}>Generar tabla</Text>
        </TouchableOpacity>

        {error !== '' && (
          <View style={estilos.resultado}>
            <Text style={estilos.error}>{error}</Text>
          </View>
        )}

        {tabla && (
          <View style={s.tabla}>
            {tabla.filas.map((f) => (
              <View key={f.i} style={s.fila}>
                <Text style={s.op}>{tabla.base}</Text>
                <Text style={s.signo}>×</Text>
                <Text style={s.op}>{f.i}</Text>
                <Text style={s.signo}>=</Text>
                <Text style={s.res}>{f.res}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  tabla: {
    marginTop: 20,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderBottomColor: colores.borde,
  },
  op: {
    fontSize: 19,
    fontWeight: '600',
    color: colores.texto,
    width: 50,
    textAlign: 'center',
  },
  signo: {
    fontSize: 19,
    color: colores.gris,
    width: 28,
    textAlign: 'center',
  },
  res: {
    fontSize: 19,
    fontWeight: '800',
    color: colores.azulOsc,
    width: 70,
    textAlign: 'center',
  },
})
