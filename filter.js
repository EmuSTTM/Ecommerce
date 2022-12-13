const filtro = document.getElementById("filtro-talle");

// Damos funcionalidad al filtro que está en el index
filtro.addEventListener("change", event => {
    contenedorProductos.innerHTML = "";
    if ( filtro.value === "all"){
        agregarContenido(stockProductos)
    }else{
        
        let filtroComprobador = stockProductos.filter(prod => prod.talle == filtro.value)
        agregarContenido(filtroComprobador)
    }

})

