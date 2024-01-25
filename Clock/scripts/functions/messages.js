function updateCorrectMessage () {
    const horaActual = new Date().getHours();
    if (horaActual >= 6 && horaActual < 12) ELEMENTS.description.innerHTML = MESSAGES.morning
    else if (horaActual >= 12 && horaActual < 18) ELEMENTS.description.innerHTML = MESSAGES.after
    else ELEMENTS.description.innerHTML = MESSAGES.night
}