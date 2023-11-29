const input_day = document.querySelector('.number-fecha-day')
const input_month = document.querySelector('.number-fecha-month')
const input_year = document.querySelector('.number-fecha-year')
const icono_boton = document.querySelector('.background-icon')
const imprimir_year = document.querySelector('.numero-resultado-year')
const imprimir_month = document.querySelector('.numero-resultado-month')
const imprimir_day = document.querySelector('.numero-resultado-day')
const error_day = document.querySelector('.error-day')
const error_month = document.querySelector('.error-month')
const error_year = document.querySelector('.error-year')

const fechaActual = new Date()

input_day.addEventListener('keydown', (event)=>{
  const value_day = Number(input_day.value)
  const value_month = Number(input_month.value)
  const value_year = Number(input_year.value)
  
})

icono_boton.addEventListener('click', ()=>{
  const value_day = Number(input_day.value)
  const value_month = Number(input_month.value)
  const value_year = Number(input_year.value)

  let edad = fechaActual.getFullYear() - value_year
  let meses = (fechaActual.getMonth() + 1) - value_month
  let dias = fechaActual.getDate() - value_day

  if (meses < 0) {
    edad--
    meses = fechaActual.getMonth() + 1
  }
  if (dias < 0) {
    dias = value_day - fechaActual.getDate()
  }

  imprimir_year.innerText = edad
  imprimir_month.innerText = meses
  imprimir_day.innerText = dias
})