var rodrigo = {
  nombre: 'Rodrigo',
  apellido: 'Trivel',
  edad: 29
}

var ana = {
  nombre: 'Ana',
  apellido: 'Meninea',
  edad: 28
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(rodrigo)
imprimirNombreEnMayusculas(ana)

function imprimirNombreYEdad(persona) {
  var { nombre } = persona
  var { edad } = persona
  console.log(`Hola, me llamo ${nombre.toUpperCase()} y tengo ${edad} años`)

  // Hola, me llamo Rodrigo y tengo 29 años
}

imprimirNombreYEdad(rodrigo)
imprimirNombreYEdad(ana)