function renderDaysInCalendar () {
    ELEMENTS.containerDays.innerHTML = ""
    let DaysT = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    let day = 0
    let prevMonth
    let prevYear
    let nextMonth
    let nextYear

    // Obtener los datos de la fecha actual
    const {monthNum, year,} = getDateNow()
    const days = getDaysInMonth(monthNum, year)
    const initialDay = getInitDayWithMonth(monthNum, year)


    // Obtener los dias del mes anterior
    if (monthNum === 1) {
        prevMonth = 12
        prevYear = year - 1
    } else {
        prevMonth = monthNum - 1
        prevYear = year
    }

    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear)
    let prevdays = daysInPrevMonth - initialDay

    // Obtener ls dias del mes posterior
    if (monthNum === 12) {
        nextMonth = 1
        nextYear = year + 1
    } else {
        nextMonth = monthNum + 1
        nextYear = year
    }

    const initialDayInNextMonth = getInitDayWithMonth(nextMonth, nextYear)
    const missingDays = 7 - initialDayInNextMonth

    console.log(days, initialDay, daysInPrevMonth, initialDayInNextMonth, missingDays)
   
    DaysT.map((element) => ELEMENTS.containerDays.innerHTML += `<div class="button__day daytext"><h1>${element}</h1></div>`)

    for (let i = 1; i <= days + initialDay + missingDays; i++) {
        if (i <= initialDay) {
            prevdays = prevdays + 1
            ELEMENTS.containerDays.innerHTML += `<div class="button__day day aditional"><h1>${prevdays}</h1></div>`
        } else if (i > days + initialDay) {
            day = day + 1
            ELEMENTS.containerDays.innerHTML += `<div class="button__day day aditional"><h1>${day}</h1></div>`
        } else {
            ELEMENTS.containerDays.innerHTML += `<div class="button__day day"><h1>${i - initialDay}</h1></div>`
        }
    } 
}

function renderDateNowInCalendar () {
    const {year, weekday, day, month} = getDateNow()
    ELEMENTS.contaienrYear.innerHTML = year
    ELEMENTS.containerDate.innerHTML = `${weekday}, ${day} de ${month}`
}