// imgFile = document.getElementById("img-file");

// imgFile.addEventListener("change", () =>{
//     console.log("." + imgFile.value.substring(11,))
//     console.log(imgFile)
// })

imgNuevo = document.getElementById("img-nuevo");
nombreNuevo = document.getElementById("nombre-nuevo");
tipoNuevo = document.getElementById("tipo-nuevo")
talleNuevo = document.getElementById("talle-nuevo")
descNuevo = document.getElementById("desc-nuevo")
precioNuevo = document.getElementById("precio-nuevo")

botonNuevo = document.getElementById("boton-nuevo")


botonNuevo.addEventListener("click",()=>{
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
    agregarContenido(stockProductos)
})


