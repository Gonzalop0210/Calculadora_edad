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

input_day.addEventListener('input', ()=>{
  validarDia()
})

function validarDia() {
  const value_day = Number(input_day.value)
  const value_month = Number(input_month.value)
  const value_year = Number(input_year.value)
  // Resetear clases de error y borde al inicio
  input_day.classList.remove('border-error');
  error_day.classList.add('error-day-none');

  const par = value_month % 2 == 0
  if (par) {
    if (value_day > 30) {
      input_day.classList.add('border-error')
      error_day.classList.remove('error-day-none')
    }  
  } else if (!par) {
    if (value_day > 31) {
      input_day.classList.add('border-error')
      error_day.classList.remove('error-day-none')
    }
  }
}

input_month.addEventListener('input', ()=>{
  const value_day = Number(input_day.value)
  const value_month = Number(input_month.value)
  const value_year = Number(input_year.value)

  input_month.classList.remove('border-error')
  error_month.classList.add('error-month-none')

  if (value_month > 12 || value_month < 0) {
    input_month.classList.add('border-error')
    error_month.classList.remove('error-month-none')
  }
  validarDia()
})

input_year.addEventListener('input', ()=>{
  const value_day = Number(input_day.value)
  const value_month = Number(input_month.value)
  const value_year = Number(input_year.value)

  input_year.classList.remove('border-error')
  error_year.classList.add('error-year-none')  

  if (value_year > fechaActual.getFullYear()) {
    input_year.classList.add('border-error')
    error_year.classList.remove('error-year-none')
  }
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