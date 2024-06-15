function renderDayNow() {
    const dateNow = getFormatDate()
    const $dateNow = document.getElementById("date__now")
    console.log(dateNow)
    $dateNow.textContent = dateNow
}