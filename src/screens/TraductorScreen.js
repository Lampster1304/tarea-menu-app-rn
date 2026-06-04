import { useState } from 'react'
import {
  ScrollView, Text, TextInput, TouchableOpacity, View,
} from 'react-native'
import { numeroALetras, capitalizar } from '../utils/numeroALetras'
import { estilos } from '../theme'

export default function TraductorScreen() {
  const [numero, setNumero] = useState('')
  const [letras, setLetras] = useState(null)
  const [error, setError] = useState('')

  function traducir() {
    if (numero === '') {
      setError('Ingresa un número del 1 al 1000')
      setLetras(null)
      return
    }
    const r = numeroALetras(numero)
    if (r.startsWith('El número') || r.startsWith('Ingresa')) {
      setError(r)
      setLetras(null)
    } else {
      setError('')
      setLetras(capitalizar(r))
    }
  }

  return (
    <ScrollView style={estilos.pantalla} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.titulo}>Números a Letras</Text>
      <Text style={estilos.subtitulo}>
        Escribe un número del 1 al 1000 (en español, sin APIs)
      </Text>

      <View style={estilos.card}>
        <Text style={estilos.etiqueta}>Número (1 - 1000)</Text>
        <TextInput
          style={estilos.input}
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
          placeholder="Ej: 247"
        />

        <TouchableOpacity style={estilos.btnPrimario} onPress={traducir}>
          <Text style={estilos.btnPrimarioTexto}>Traducir</Text>
        </TouchableOpacity>

        {error !== '' && (
          <View style={estilos.resultado}>
            <Text style={estilos.error}>{error}</Text>
          </View>
        )}

        {letras !== null && (
          <View style={estilos.resultado}>
            <Text style={estilos.resultadoEtiqueta}>En letras</Text>
            <Text style={[estilos.resultadoValor, { fontSize: 26, textAlign: 'center' }]}>
              {letras}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}
