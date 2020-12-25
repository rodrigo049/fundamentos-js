var rodrigo = {
    Nombre : 'Rodrigo',
    Apellido : 'Trivel',
    Edad : 29
}
var alex = {
    Nombre : 'Alex',
    Apellido : 'Casadevall',
    Edad : 28
}

function imprimirNombreEnMayusculas({Nombre}) {
  n = Nombre.toUpperCase()
  console.log(n)
}

imprimirNombreEnMayusculas(rodrigo)
imprimirNombreEnMayusculas(alex)
console.log(rodrigo)
console.log(alex)