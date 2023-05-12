import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale:'en',
    messages:{
        en:{
            "home": "Home",
            "healthChecks": "Health Checks",
            "pageNotFound": "Oops, page not found",
            "backHome": "Back Home",
            "treadmill": "Treadmill",
            "serialNumber": "Serial Number",
            "centerName": "Center Name",
            "averagePerformance": "Average Performance",
            "date": "Date",
            "time": "Time"
        },
        es:{
            "home": "Inicio",
            "healthChecks": "Controles de salud",
            "pageNotFound": "Oops, esta pagina no existe",
            "backHome": "Regresar",
            "treadmill": "Caminadora",
            "serialNumber": "No. Serie",
            "centerName": "Centro",
            "averagePerformance": "Desempeño promedio",
            "date": "Fecha",
            "time": "Hora"
        }
    }
})

export  default  i18n;