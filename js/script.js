//hola
/*
let nombre
nombre = "marco"
let rolenelcurso = "profesor"
console.log(nombre)
let numero = 420
let total = 50+50
console.log("el total es " + total)
//alert("mostrar un mensaje")
//let nombreUsuario = prompt("Ingrese su nombre")
//console.log(nombreUsuario)
//console.log(confirm("acepte"))
let numeroUno = prompt("ingrese su primer numero")
let numeroDos = prompt("ingrese su segundo numero")
numeroUno = parseInt(numeroUno) //cambia de string a number
numeroDos = parseInt(numeroDos)
let resultado = numeroUno + numeroDos
alert("su resultado es " + resultado) 
let usuario=prompt("ingrese su nombre").toLowerCase()
if(usuario=="marcos"){
    alert("bienvenido " + usuario)
}
else if(usuario=="maximo"){
    alert("bienvenido "+ usuario)
}
else{
alert(usuario + " no tiene permitido el acceso")
}
const password = "hola123"
const user = "maxi123"
let usuario = prompt("ingrese su usuario").toLowerCase()
let contrasena = prompt("ingrese su contraseña").toLowerCase()
if((usuario==user)&&(contrasena=password)){
    alert("bienvenido "+ usuario)
}
else{
    alert("incorrecto")
}*/
function gcDiario(){

do{
let genero = prompt("ingrese 'hombre' si tu genero es masculino \n ingrese 'mujer' si tu genero es femenino")
let resultado = 0;
if(genero == "mujer" || genero == "hombre"){

let peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
let altura = parseFloat(prompt("Ingrese su altura en centimetros:"));
let edad = parseFloat(prompt("Ingrese su edad:"));
let actividad = parseInt(prompt("Ingrese su nivel de actividad:\n Sedentario(poco o ningun ejercicio): INGRESE 1\n poco activo(ejercicio ligero): INGRESE 2\n moderadamente activo(3-4 dias a la semana): INGRESE 3\n Muy activo(5-7 dias a la semana): INGRESE 4"));
let nivelActividad = 0
if(actividad === 1){
    nivelActividad = 1.2;
}
else if(actividad === 2){
    nivelActividad = 1.375;
}
else if(actividad === 3){
    nivelActividad = 1.555;
}
else if(actividad === 4){
    nivelActividad = 1.725;
}
else{
    nivelActividad = 1.2;
}
if(genero ==="hombre"){
    resultado = ((10 * peso) + (6.25 * altura) - (5*edad) + 5)*nivelActividad
}
else if (genero === "mujer") {
    resultado = ((10 * peso) + (6.25 * altura) - (5 * edad) - 161) * nivelActividad
} 

}
else{
    alert("Género no válido. Por favor, ingrese 'hombre' o 'mujer'.");
}
opcion = confirm("¿Quieres realizar de nuevo el calculo de tu gasto calorico diario??");
    
return resultado;
} while (opcion == true);

}


function objetivoGC(resultado) {
    let objetivo;
    do {
        objetivo = parseInt(prompt("¿Cuál es tu objetivo? \n 1: AUMENTAR PESO \n 2: MANTENER PESO \n 3: BAJAR PESO")); // Convierte a número
        if (objetivo === 1) {
            return resultado + 300; // Aumentar peso
        } else if (objetivo === 2) {
            return resultado; // Mantener peso
        } else if (objetivo === 3) {
            return resultado - 300; // Bajar peso
        } else {
            alert("EL OBJETIVO ES INCORRECTO. Por favor, ingresa un número entre 1 y 3.");
        }
    } while (objetivo < 1 || objetivo > 3); // Repetir hasta que el objetivo sea válido
}



let resultadoGC = gcDiario()
let resultadoObjetivo = objetivoGC(resultadoGC);
alert("SEGÚN EL OBJETIVO QUE ELEGISTE, TU INGESTA CALÓRICA DIARIA DEBE SER DE " + resultadoObjetivo + " CALORÍAS DIARIAS.");



