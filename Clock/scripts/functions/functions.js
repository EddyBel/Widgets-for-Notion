/** Esta función se encarga de actualizar la hora sincronizada con la zona horaria  */
function executeClock () {
    const clock = new Clock()
    clock.timeZone ="America/Mexico_city"
    clock.lang= "es-MX"
    clock.init((hour, moon) => {
        ELEMENTS.clock.innerHTML = hour

        const moonElement = document.createElement("span")
        moonElement.innerHTML = ` ${moon}`
        ELEMENTS.clock.appendChild(moonElement)
    } )
}

function getDateNow() {
    const fechaActual = new Date();
    const opcionesDeFormato = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formatoLocal = fechaActual.toLocaleDateString("es-MX", opcionesDeFormato);
    ELEMENTS.date.innerHTML = formatoLocal
    return formatoLocal;
}

/** Funcion que define un fondo de pantalla del reloj de manera aleatoria */
const defineBackground = () => {
    const background = getRandomItem(BACKGROUNDS_DARK)
    ELEMENTS.backgroundContent.style.backgroundImage = `url(${background})`
 }