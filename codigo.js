                      //ACTIVIDAD 1
                      
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let edad = prompt("Ingrese su edad: ");
let ciudad = prompt("Ingrese su ciudad de residencia: ");

let datos = [nombre, apellido, edad, ciudad];

document.write("Nombre: " + datos[0] + "</br>");
document.write("Apellido: " + datos[1] + "</br>");
document.write("Edad: " + datos[2] + "</br>");
document.write("Ciudad de residencia: " + datos[3] + "</br>" + "</br>");

//-----------------------------------------------------------------
                      //ACTIVIDAD 2

//declaramos el array y le asignamos los valores
let posiciones = [
  "Jesús",
  "Laura",
  "Nahuel",
  "Mónica",
  "Maria",
  "Leandro",
  "Susana ",
];

//imprimimos cada uno de los valores del array (comienza por cero!)

document.write("ACTIVIDAD 2: Lista de alumnos" + "<br>");
document.write("1. " + posiciones[0] + "<br>");
document.write("2. " + posiciones[1] + "<br>");
document.write("3. " + posiciones[2] + "<br>");
document.write("4. " + posiciones[3] + "<br>");
document.write("5. " + posiciones[4] + "<br>");
document.write("6. " + posiciones[5] + "<br>");
document.write("7. " + posiciones[6] + "<br>" + "<br>");

let posicionEliminada = posiciones.splice(3, 1);
posiciones.splice(2, 0, posicionEliminada);
document.write("Mónica entrego antes que Nahuel:" + "<br>");
document.write(posiciones.join("-") + "</br>" + "<br>");

posiciones.splice(5, 1);
document.write("Leandro no asistió y lo eliminamos de esta lista:" + "<br>");
document.write(posiciones.join("-") + "</br>" + "<br>");

let borrarPrimero = posiciones.shift();
posiciones.unshift(borrarPrimero, "Roberto", "Claudia");
document.write(
  "Detrás de Jesús y antes de Laura entregaron 2 alumnos que no estaban en la lista: Roberto y Claudia, en ese orden" +
    "<br>"
);
document.write(posiciones.join("-") + "</br>");
