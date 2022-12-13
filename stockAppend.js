
const imgNuevo = document.getElementById("img-nuevo");
const nombreNuevo = document.getElementById("nombre-nuevo");
const tipoNuevo = document.getElementById("tipo-nuevo")
const talleNuevo = document.getElementById("talle-nuevo")
const descNuevo = document.getElementById("desc-nuevo")
const precioNuevo = document.getElementById("precio-nuevo")
const formulario = document.getElementById("crear-form")


formulario.addEventListener("submit",(e)=>{
    e.preventDefault() //Esto prevee el reinicio del programa al utilizar submit
    const productoNuevo = {};
    productoNuevo["id"] = stockProductos.length + 1;
    productoNuevo["nombre"] = nombreNuevo.value;
    productoNuevo["tipo"] = tipoNuevo.value;
    productoNuevo["cantidad"] = 1;
    productoNuevo["desc"] = descNuevo.value;
    productoNuevo["precio"] = precioNuevo.value;
    productoNuevo["talle"] = talleNuevo.value;
    productoNuevo["img"] = "./img/" + imgNuevo.value.substring(12,)
    stockProductos.push(productoNuevo)
    console.log(stockProductos)
    contenedorProductos.innerHTML = "";
    nombreNuevo.value = "";
    tipoNuevo.value = "";
    descNuevo.value = "";
    talleNuevo.value = "";
    precioNuevo = "";
    imgNuevo.value =""
    agregarContenido(stockProductos)
})


