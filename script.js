const dropdown = document.querySelector('.dropdown');

const opciones = dropdown.querySelectorAll('.texto')

 dropdown.addEventListener('click',()=>{
    opciones.forEach( opcion => {
        opcion.classList.toggle('opcion')
     })
 })