module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    // El plugin de worklets debe ir SIEMPRE de último (Reanimated 4).
    plugins: ['react-native-worklets/plugin'],
  }
}
