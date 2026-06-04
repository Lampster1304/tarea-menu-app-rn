import { useState } from 'react'
import {
  ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native'
import { estilos } from '../theme'

export default function SumadoraScreen() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState('')

  function sumar() {
    const n1 = parseFloat(a)
    const n2 = parseFloat(b)
    if (isNaN(n1) || isNaN(n2)) {
      setError('Ingresa dos números válidos')
      setResultado(null)
      return
    }
    setError('')
    setResultado(n1 + n2)
  }

  function limpiar() {
    setA('')
    setB('')
    setResultado(null)
    setError('')
  }

  return (
    <ScrollView style={estilos.pantalla} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.titulo}>Sumadora</Text>
      <Text style={estilos.subtitulo}>Suma dos números y muestra el resultado</Text>

      <View style={estilos.card}>
        <Text style={estilos.etiqueta}>Primer número</Text>
        <TextInput
          style={estilos.input}
          keyboardType="numeric"
          value={a}
          onChangeText={setA}
          placeholder="Ej: 8"
        />

        <Text style={estilos.etiqueta}>Segundo número</Text>
        <TextInput
          style={estilos.input}
          keyboardType="numeric"
          value={b}
          onChangeText={setB}
          placeholder="Ej: 5"
        />

        <TouchableOpacity style={estilos.btnPrimario} onPress={sumar}>
          <Text style={estilos.btnPrimarioTexto}>Sumar</Text>
        </TouchableOpacity>

        <View style={{ height: 10 }} />

        <TouchableOpacity style={estilos.btnSecundario} onPress={limpiar}>
          <Text style={estilos.btnSecundarioTexto}>Limpiar</Text>
        </TouchableOpacity>

        {error !== '' && (
          <View style={estilos.resultado}>
            <Text style={estilos.error}>{error}</Text>
          </View>
        )}

        {resultado !== null && (
          <View style={estilos.resultado}>
            <Text style={estilos.resultadoEtiqueta}>Resultado</Text>
            <Text style={estilos.resultadoValor}>{resultado}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}
