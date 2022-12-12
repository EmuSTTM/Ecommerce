const filtro = document.getElementById("filtro-talle");



filtro.addEventListener("change", event => {
    contenedorProductos.innerHTML = "";
    if ( filtro.value === "all"){
        agregarContenido(stockProductos)
    }else{
        
        let filtroComprobador = stockProductos.filter(prod => prod.talle == filtro.value)
        agregarContenido(filtroComprobador)
    }

})

