const establecerRecordatorio2 = (fechaHoraRecordatorio, mensaje) => {

    const getDate = new Date()

    const horaRecordatorio = new Date(fechaHoraRecordatorio)

    const diferenciaTiempo = horaRecordatorio.getTime() - getDate.getTime()

    if (diferenciaTiempo > 0) {
        
        setTimeout(() => {
            const alo = horaRecordatorio.getFullYear()
            const mes = horaRecordatorio.getMonth()
            const dia = horaRecordatorio.getDay()
            const horas = horaRecordatorio.getHours()
            const minutos = horaRecordatorio.getMinutes()
            const segundos = horaRecordatorio.getSeconds()

            console.log(`recordatorio para ${alo}/${mes}//${dia}//${horas}/${minutos}//${segundos}`);

        }, diferenciaTiempo)
    } else {
        console.log("La fecha y hora ya han pasado");
    }

}


establecerRecordatorio2("2024-09-03T15:16:14" , "Es hora de la practica")