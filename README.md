# App Móvil con Menú — Tarea (React Native + Expo)

Aplicación **móvil** hecha con **React Native (Expo)** con un menú lateral (drawer)
de 5 opciones:

| Opción | Descripción |
|--------|-------------|
| 🏠 **Página Inicial** | Datos personales: foto 2x2, nombre, apellido, matrícula y correo. |
| ➕ **Sumadora** | Suma dos números y muestra el resultado. |
| 🔤 **Números a Letras** | Traduce un número del 1 al 1000 a letras en español (**sin APIs**). |
| ✖️ **Tabla de Multiplicar** | Muestra la tabla de un número hasta el 13. |
| 🎬 **Experiencia Personal** | Video de YouTube explicando la experiencia al hacer la tarea. |

## Cómo correr el proyecto

```bash
npm install
npx expo start
```

Luego:
- Presiona **`a`** para abrirla en un **emulador de Android** (Android Studio), o
- Escanea el **QR** con la app **Expo Go** en tu teléfono.

## Cómo personalizar los datos

Edita **un solo archivo**: `src/data/perfil.js`

- Cambia nombre, apellido, matrícula y correo.
- Reemplaza la **foto 2x2** en `assets/foto.jpg`.
- Pega el **enlace de tu video de YouTube** en `videoUrl`.

## Tecnologías

- React Native 0.85 + Expo SDK 56
- React Navigation (Drawer) v7
- react-native-webview (para el video)

> El traductor de números a letras está implementado a mano en
> `src/utils/numeroALetras.js` — **no usa ninguna API ni librería externa.**
