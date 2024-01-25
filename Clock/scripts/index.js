// Espera a que termine de cargar el dom para ejecutar los scripts
window.addEventListener("DOMContentLoaded", () => {
    defineBackground()
    executeClock()
    updateCorrectMessage()
    obtenerMesYAnioEnTexto()
})