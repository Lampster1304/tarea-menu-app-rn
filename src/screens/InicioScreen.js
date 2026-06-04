import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { perfil } from '../data/perfil'
import { colores, estilos } from '../theme'

export default function InicioScreen() {
  return (
    <ScrollView style={estilos.pantalla} contentContainerStyle={estilos.contenido}>
      <Text style={estilos.titulo}>Página Inicial</Text>
      <Text style={estilos.subtitulo}>Mis datos personales</Text>

      <View style={estilos.card}>
        {/* FOTO 2x2 */}
        <View style={s.fotoContenedor}>
          <Image source={perfil.foto} style={s.foto} resizeMode="cover" />
        </View>

        {/* DATOS */}
        <Dato etiqueta="Nombre" valor={perfil.nombre} />
        <Dato etiqueta="Apellido" valor={perfil.apellido} />
        <Dato etiqueta="Matrícula" valor={perfil.matricula} />
        <Dato etiqueta="Correo electrónico" valor={perfil.correo} />
      </View>
    </ScrollView>
  )
}

function Dato({ etiqueta, valor }) {
  return (
    <View style={s.dato}>
      <Text style={s.datoEtiqueta}>{etiqueta.toUpperCase()}</Text>
      <Text style={s.datoValor}>{valor}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  fotoContenedor: {
    alignSelf: 'center',
    width: 180,
    height: 180,
    borderRadius: 14,
    borderWidth: 4,
    borderColor: colores.azul,
    overflow: 'hidden',
    marginBottom: 24,
    backgroundColor: colores.azulClaro,
  },
  foto: {
    width: '100%',
    height: '100%',
  },
  dato: {
    marginBottom: 16,
  },
  datoEtiqueta: {
    fontSize: 11,
    fontWeight: '700',
    color: colores.gris,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  datoValor: {
    fontSize: 18,
    fontWeight: '600',
    color: colores.texto,
  },
})
