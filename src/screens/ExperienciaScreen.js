import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import { perfil } from '../data/perfil'
import { colores, estilos } from '../theme'

// Extrae el ID del video desde cualquier formato de enlace de YouTube
function obtenerIdYouTube(url) {
  if (!url) return null
  const patrones = [
    /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
  ]
  for (const p of patrones) {
    const m = url.match(p)
    if (m) return m[1]
  }
  return null
}

export default function ExperienciaScreen() {
  const videoId = obtenerIdYouTube(perfil.videoUrl)
  const ancho = Dimensions.get('window').width - 40 - 44 // pantalla - padding - card
  const alto = (ancho * 9) / 16

  return (
    <ScrollView style={estilos.pantalla} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.titulo}>Experiencia Personal</Text>
      <Text style={estilos.subtitulo}>Mi video explicando cómo realicé esta tarea</Text>

      <View style={estilos.card}>
        {videoId ? (
          <View style={[s.video, { height: alto }]}>
            <WebView
              style={{ flex: 1 }}
              source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
              allowsFullscreenVideo
              javaScriptEnabled
            />
          </View>
        ) : (
          <View style={s.pendiente}>
            <Text style={s.icono}>🎬</Text>
            <Text style={s.pendienteTexto}>
              Aún no hay enlace del video.{'\n'}
              Pégalo en{' '}
              <Text style={s.code}>src/data/perfil.js</Text> en el campo{' '}
              <Text style={s.code}>videoUrl</Text>.
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  )
}

const s = StyleSheet.create({
  video: {
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  pendiente: {
    alignItems: 'center',
    paddingVertical: 36,
  },
  icono: {
    fontSize: 46,
    marginBottom: 12,
  },
  pendienteTexto: {
    textAlign: 'center',
    color: colores.gris,
    fontSize: 14,
    lineHeight: 22,
  },
  code: {
    color: colores.azulOsc,
    fontWeight: '700',
  },
})
