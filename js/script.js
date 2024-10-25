/*function gcDiario(){

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

const usuario = {
    nombre: "maxi",
    edad: 19,
    genero: "masculino",
}
console.log(usuario.edad)


//      FUNCIONES CONSTRUCTORAS

function Producto(nombre, precio, desc){
    this.nombre = nombre
    this.precio= precio
    this.desc= desc
}

const producto = new Producto("remera", 10000, "remera algodon")
const producto2 = new Producto("buzo", 10000, "buzo estampado")
console.log(producto)
console.log(producto2)
function Producto(nombre, precio, desc, stock){
    this.nombre = nombre
    this.precio = precio
    this.desc = desc
    this.stock = stock

    this.mostrarStock = function(){
        console.log("el stock disponible es "+ this.stock)
    }
}
const producto = new Producto ("remera", 10000, "algodon", 20)
console.log(producto)
producto.mostrarStock()

// CLASES
class Producto{

constructor(nombre,precio,desc,stock){
    this.nombre = nombre
    this.precio = precio
    this.desc = desc
    this.stock = stock

}
    restarStock(){
    this.stock--
    }
    agregarStock(cantidad){
        this.stock += cantidad
    }
}
const producto = new Producto("remera", 10000, "remera algodon", 20)
producto.agregarStock(40)
console.log(producto)
class CuentaBancaria{
    constructor(nombre, saldo, tipo){
        this.nombre = nombre
        this.saldo = saldo
        this.tipo = tipo
    }
    obtenerSaldo(){
        console.log(this.saldo)
    }
    depositar(cantidad){
        if(cantidad>0){
            this.saldo += cantidad 
            alert(`Depositado: $${cantidad}. Nuevo saldo: $${this.saldo}`);
        }
        else{
            alert("cantidad erronea")
        }
    }
    retirar(cantidad){

        if(cantidad > 0 && cantidad <= this.saldo){
            this.saldo -= cantidad
             //this.saldo = this.saldo - cantidad
             alert("Retiraste " + cantidad + " Saldo actual: " + this.saldo);
       } else{
            alert("la cantidad es invalida o insuficiente saldo")
        }

}
}
const cuenta1 = new CuentaBancaria("Maximo",35000,"caja de ahorro")
console.log(cuenta1);
let cantidad = parseInt(prompt("Ingrese la cantidad a depositar:"));
cuenta1.depositar(cantidad)

let texto ="hola"
let texto2 = texto;
console.log(texto, texto2)

class Producto {
    constructor(nombre, precio, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

const productos = [];

const agregarProductos = () => {
    let nombre = prompt("Ingrese nombre de producto");
    let precio = prompt("Ingrese precio de producto");
    let descripcion = prompt("Ingrese una breve descripción");

    let producto = new Producto(nombre, precio, descripcion);

    productos.push(producto);  // Agregamos el producto al array productos
}

const mostrarProductos = () => {
    let total = 0;
    let mensaje = "Productos agregados: \n";

    for (let producto of productos) {
        mensaje += `
        .Nombre: ${producto.nombre}
        .Descripción: ${producto.descripcion}
        .Precio: $${producto.precio}
        `;
        total += producto.precio;
    }
    alert(mensaje);
    alert(`El precio final de todos los productos es $${total}`);
}

const simulador = () => {
    let continuar = true;

    while (continuar) {
        agregarProductos();
        continuar = confirm("¿Deseas agregar otro producto?");
    }
    mostrarProductos();
}

simulador();
*/
class Persona{
    constructor(genero,nombre, peso, altura, edad, actividad, resultado){
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.edad = edad;
        this.actividad = actividad;
        this.genero = genero;
        this.resultado = resultado;
}
}
const personas = [];
const agregarPersonas = () => {
    let genero = parseInt(prompt("ingrese '1' si tu genero es masculino \n ingrese '2' si tu genero es femenino"));
    let nombre = prompt("Ingrese nombre");
    let peso = parseInt(prompt("Ingrese su peso en KG"));
    let altura = parseInt(prompt("Ingrese su altura en CM"));
    let edad = parseInt(prompt("ingrese su edad"));
    let actividad = parseInt(prompt("Ingrese su nivel de actividad:\n Sedentario(poco o ningun ejercicio): INGRESE 1\n poco activo(ejercicio ligero): INGRESE 2\n moderadamente activo(3-4 dias a la semana): INGRESE 3\n Muy activo(5-7 dias a la semana): INGRESE 4"))
    if (isNaN(peso) || isNaN(altura) || isNaN(edad) || isNaN(actividad)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }
    let resultado = 0;
    let persona = new Persona(genero,nombre, peso, altura, edad, actividad, resultado);
    gcDiario(persona)
    personas.push(persona);
}
function gcDiario(persona){
    
    persona.resultado = 0;
    if(persona.genero == 1 || persona.genero == 2){
    let nivelActividad = 0
         if(persona.actividad === 1){nivelActividad = 1.2;}
    else if(persona.actividad === 2){nivelActividad = 1.375;}
    else if(persona.actividad === 3){nivelActividad = 1.555;}
    else if(persona.actividad === 4){nivelActividad = 1.725;}
       else{nivelActividad = 1.2;}
    if(persona.genero === 1){
        persona.resultado = ((10 * persona.peso) + (6.25 * persona.altura) - (5*persona.edad) + 5)*nivelActividad
    }
    else if (persona.genero === 2) {
        persona.resultado = ((10 * persona.peso) + (6.25 * persona.altura) - (5 * persona.edad) - 161) * nivelActividad
    } 
    
    }
    else{
        alert("Género no válido. Por favor, ingrese 1 o 2.");
    }
}
const mostrarGastocalorico = () => {
    for (let i = 0; i < personas.length; i++) {
        alert(
            "Nombre: " + personas[i].nombre + "\n" +
            "Peso: " + personas[i].peso + " kg\n" +
            "Altura: " + personas[i].altura + " cm\n" +
            "Edad: " + personas[i].edad + " años\n" +
            "Nivel de Actividad: " + personas[i].actividad + "\n" +
            "Género: " + (personas[i].genero === 1 ? "Masculino" : "Femenino") + "\n" +
            "Resultado (Gasto calórico diario): " + personas[i].resultado.toFixed(2)
        );
    }
}
const calcularPromedio = () => {
    let total= 0;
    for(let i=0; i<personas.length; i++){
        total += personas[i].resultado;
    }
    let promedio = total / personas.length; 
    alert("El promedio del gasto calórico es: " + promedio.toFixed(2));
}
const simulador = () => {
    let continuar = true;

    while (continuar) {
        agregarPersonas();
        continuar = confirm("¿Deseas agregar otra persona?");
    }
    mostrarGastocalorico()
    calcularPromedio()

}
simulador()