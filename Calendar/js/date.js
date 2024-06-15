function getDateNow() {
    let date = new Date()
    let year = date.getFullYear()
    let day = date.getDate()
    let month = date.toLocaleDateString('es-MX', { month: "long" })
    let weekday = date.toLocaleDateString('es-MX', { weekday: "long" })
    let monthNum = date.getMonth() + 1
    return { year, day, month, weekday, monthNum }
}

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function getInitDayWithMonth(month, year) {
    return new Date(year, month - 1, 1).getDay();
}


function getFormatDate() {
    const dias = [
        'Domingo', 'Lunes', 'Martes', 'Miércoles',
        'Jueves', 'Viernes', 'Sábado'
    ];
    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const hoy = new Date();
    const diaSemana = dias[hoy.getDay()];
    const diaMes = hoy.getDate();
    const mes = meses[hoy.getMonth()];

    return `${diaSemana}, ${diaMes} de ${mes}`;
}