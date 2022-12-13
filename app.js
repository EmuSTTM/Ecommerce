const contenedorProductos = document.getElementById("contenedor-productos");
const contenedorCarrito = document.getElementById("carrito-contenedor")

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precio-total')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = [];

const contadorCarrito = document.getElementById('contador-carrito')


// Esto es para que el localStorage pueda acceder a la información de carrito
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})




// Esto lo ponemos al inicio porque es sólo un addEvenetListener de algo que ya existia en el DOM
const botonVaciar = document.getElementById("vaciar-carrito")
botonVaciar.addEventListener("click", ()=>{
    carrito.length = 0;
    actualizarCarrito()
})







// 1 PASO : Hacemos que un forEach recorra todo el array de stockProductos
// Y les diseñe una forma de presentarse en el DOM
const agregarContenido = (contenido) =>{
contenido.forEach(producto =>{

    const div = document.createElement("DIV");
    div.classList.add("producto")
    div.innerHTML = `
    <img src=${producto.img} alt="${producto.nombre}" >
    <h3>${producto.nombre}</h3> 
    <p>${producto.desc}</p>
    <p>Talle: ${producto.talle}</p>
    <p class="precio-producto" >Precio: $ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar"> Agregar <i class="fas fa-shopping-cart"></i></button>  
    `

    contenedorProductos.appendChild(div);


    // 2 PASO: Obtenemos el boton que acabamos de agregar al DOM. Por esto no se puede usar createDocumentFragment
    const boton = document.getElementById(`agregar${producto.id}`)


    // Le vamos a añadir un addEventListeneer al boton que acabamos de llamar
    boton.addEventListener("click", ()=>{
        agregarAlCarrito(producto.id)

    })
})
}
agregarContenido(stockProductos)



// 3 PASO: Agregar al carrito
const agregarAlCarrito = prodId =>{

    // Agregamos una validacion primero, para corroborar que si el carrito está
    // aumente la cantidad, en vez de agregar un nuevo recuadro del producto

            // .some() Comprueba si al menos un eleemento del Array cumple con la condicion    
           //implementada por la función proporcionada. Devuelve true o false;
        
    const existe = carrito.some(prod => prod.id === prodId);

    if(existe){
        const prod = carrito.map(prod => { 
            // Creamos un nuevo arreglo e iteramos sobre cada
            // curso y cuando map encuentre el igual al que está agregando, le suma 1 a
            // la cantidad
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find( prod => prod.id == prodId)
        
        carrito.push(item)
    }

    actualizarCarrito()
    
}


// 4 PASO : Vamos a actualizar el carrito, para que siempre se muestre el contenio adentro de este

const actualizarCarrito = () =>{
    // Agregamos este innerHTML, porque cargamos todos los objetos de carrito acá,
    // y si cada vez que queremos actualizar sólo los agregamos. SE ACUMULAN. Primero debemos vaciarlo.
    contenedorCarrito.innerHTML = "";

    // Tambien recordemos que estas funciones del carrito debemos añadirlo al modal,
    // el modal estará relacionado con los botones ya existentes en el DOM, referentes al carrito

    // Cargamos el estilo que va a tener cada elemento del carrito en el carrito 
    carrito.forEach(prod => {
        const div = document.createElement("DIV");
        div.classList.add("producto-en-carrito");
        // Vas a ver un "eliminarDelCarrito" que ya se va a ejecutar después
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        
        `

        contenedorCarrito.appendChild(div)

        // Esto guarda el carrito en el almacenamiento local para que no se pierda
        
        
    })
    localStorage.setItem('carrito',JSON.stringify(carrito))
    // Ahora actualizamos el numero del contador del carrito, arriba a la derecha en el header
    contadorCarrito.innerText = carrito.length
    

    // Agregamos el precio total del carrito
    precioTotal.innerText = carrito.reduce((acumulado, prod) => acumulado + prod.cantidad * prod.precio, 0)
    // .reduce() Ejecuta una función reductora a todos los elementos del array,
    // devolviendo un único valor. Esto sirve para int principalmente. El 0 es el valor del que parte la suma.

    // Aqui hacemos que cada vez que se actualice el carrito, su precio también
    
}


// 5 PASO : Eliminar del carrito. Esto se podría mejorar con el mismo if else que existe en agregar carrito.
const eliminarDelCarrito = prodId =>{

    const item = carrito.find(prod => prod.id === prodId)
    if(item.cantidad == 1){

        const indice = carrito.indexOf(item) //Buscamos el index del item en carrito
        //Splice elimina desde ese indice hasta uno más adelante
        carrito.splice(indice, 1) 

    } else {
            const prod = carrito.map(prod => { 
            // Creamos un nuevo arreglo e iteramos sobre cada
            // curso y cuando map encuentre el igual al que está agregando, le suma 1 a
            // la cantidad
            if(prod.id === prodId){
                prod.cantidad--
            }
        })
    }
    // Tenemos que llamar a esta funcion siempre que se modifica el carrito
    actualizarCarrito()


}

