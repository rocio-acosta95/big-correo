
//EVENTOS QUE CALCULA EL PESO ESTIMADO DE UN ENVIO 
//SE GUARDO EN EL LOCALSTORAGE EL COSTO POR KILO DE LOS ENVIOS
//SE AGREGO JSON PARA IR REGISTRANDO LOS ULTIMOS COSTOS.
let cantidad = document.querySelector("#peso");
const precioPorKg = 970;
localStorage.setItem(`precioPorKg`, 970);
cantidad.addEventListener("change", function(event){
event.preventDefault()
if(event.target.value === null){
console.log("no corresponde");
 }else{
 let costo = parseFloat(event.target.value) * precioPorKg;
alert("El costo es " + costo.toFixed(2))
localStorage.setItem("UltimoPrecio", JSON.stringify(costo));
}});

let selector = document.querySelector("#selector");
selector.addEventListener("change", (event) => {
    event.preventDefault();
let info = document.querySelector("#info");
info.addEventListener("click", () =>{
if(event.target.value === null){
 console.log("inexistente");
 }else{
     alert("Los envios demoran 48/72hs en dias habiles");
 }
})
 })


// 3 TARJETAS DE INFORMACION IMPORTANTES CREADOS CON DOM //
const contenido = document.getElementById("contenedor");

let item1 = document.createElement("div");
item1.classList.add("tarjetita");
item1.innerHTML = `<h5 class="titulo-tarjeta">eCarta Documento</h5>`;
item1.innerHTML += `<p class="texto-tarjeta">Ofrecemos almacenamiento, gestión de stock y nos ocupamos de la preparación de tus envíos gracias a nuestros centros de fulfillment, distribuidos estratégicamente en las principales ciudades del país.</p>`;

let item2 = document.createElement("div");
item2.classList.add("tarjetita");
item2.innerHTML = `<h5 class="titulo-tarjeta">FulFillMent</h5>`;
item2.innerHTML += `<p class="texto-tarjeta">Ofrecemos almacenamiento, gestión de stock y nos ocupamos de la preparación de tus envíos gracias a nuestros centros de fulfillment, distribuidos estratégicamente en las principales ciudades del país.</p>`;

let item3 = document.createElement("div");
item3.classList.add("tarjetita");
item3.innerHTML = `<h5 class="titulo-tarjeta">Logistica Inversa</h5>`;
item3.innerHTML += `<p class="texto-tarjeta">Entendiendo la necesidad del mercado, ofrecemos un servicio de Cambios y Devoluciones de paquetería adaptado a la necesidad del segmento de eCommerce. </p>`;

contenido.append(item1);
contenido.append(item2);
contenido.append(item3);


