const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carrito-cerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]
const contenedorModalCrear = document.getElementsByClassName('modal-contenedor-crear')[0]
const botonAbrirCrear = document.getElementById('boton-modal-crear')
const botonCerrarCrear = document.getElementById('crear-cerrar')
const modalCrear = document.getElementsByClassName('modal-crear')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', () =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre

    // Esto sirve para que cuando yo cliquee el modal, el contenedorModal no se
    // ni cambie en absolutamente nada.
})

botonAbrirCrear.addEventListener('click', ()=>{
    contenedorModalCrear.classList.toggle('modal-active')
})
botonCerrarCrear.addEventListener('click', ()=>{
    contenedorModalCrear.classList.toggle('modal-active')
})

contenedorModalCrear.addEventListener('click', () =>{
    contenedorModalCrear.classList.toggle('modal-active')

})
modalCrear.addEventListener('click', (event) => {
    event.stopPropagation() 

})