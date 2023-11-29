const input_day = document.querySelector('.number-fecha-day')
const input_month = document.querySelector('.number-fecha-month')
const input_year = document.querySelector('.number-fecha-year')
const icono_boton = document.querySelector('.background-icon')
const imprimir_year = document.querySelector('.numero-resultado-year')
const imprimir_month = document.querySelector('.numero-resultado-month')
const imprimir_day = document.querySelector('.numero-resultado-day')

const fechaActual = new Date()

icono_boton.addEventListener('click', ()=>{
  const value_day = input_day.value
  const value_month = input_month.value
  const value_year = input_year.value

  imprimir_month.innerText = value_month
  imprimir_day.innerText = value_day
  imprimir_year.innerText = value_year
})