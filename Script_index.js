document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('barra').addEventListener('click', function() {
        const menu = document.getElementById('opciones');
        menu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const menu = document.getElementById('opciones');
        const barra = document.getElementById('barra');
        
        if (!menu.contains(event.target) && !barra.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});


let currentGroup = 0; // Índice del grupo actual
const groupCount = document.querySelectorAll('.slide-group').length; // Número total de grupos

// Función para mover al siguiente grupo
function moveSlide(direction) {
    const slideContainer = document.querySelector('.slides');
    if (direction === 1 && currentGroup < groupCount - 1) {
        currentGroup++; // Avanza al siguiente grupo si no está en el último
    } else if (direction === -1 && currentGroup > 0) {
        currentGroup--; // Retrocede si no está en el primer grupo
    }

    // Ajustar la posición con transform
    slideContainer.style.transform = `translateX(-${currentGroup * 100}%)`;
}


// document.querySelectorAll('.slide-group').forEach(group => {
//     let currentIndex = 0;
//     const profiles = group.querySelectorAll('.slide');

//     setInterval(() => {
//         profiles[currentIndex].style.display = 'none'; // Oculta el perfil actual
//         currentIndex = (currentIndex + 1) % profiles.length; // Pasa al siguiente
//         profiles[currentIndex].style.display = 'block'; // Muestra el nuevo perfil
//     }, 50000); // Cambia cada 3 segundos
// });


// // d// Obtener el botón y el formulario
// const mostrarForm = document.getElementById('mostrarForm');
// const searchForm = document.getElementById('searchForm');

// // Evento para mostrar el formulario al hacer clic en la lupa
// mostrarForm.addEventListener('click', function() {
//     // Si el formulario está oculto, lo mostramos
//     if (searchForm.style.display === 'none' || searchForm.style.display === '') {
//         searchForm.style.display = 'inline-block'; // Mostrar el formulario al lado del botón
//         searchForm.classList.add('active'); // Activar el input para que aparezca suavemente
//         document.getElementById('inputSearch').focus(); // Hacer foco en el input
//     } else {
//         searchForm.style.display = 'none'; // Ocultar el formulario
//         searchForm.classList.remove('active');
//     }
// });




// //busqueda
// searchForm.addEventListener('submit', function(e) {
//     const query = inputSearch.value.trim(); // Capturar el valor del campo de búsqueda
    
//     if (!query) {
//         e.preventDefault(); // Prevenir el envío si el campo está vacío
//         alert("Por favor ingresa un término de búsqueda.");
//     } else {
//         console.log('Buscando:', query);
//         // Aquí se enviará el formulario normalmente sin interferencias
//     }
// });

//mision
const openm=document.getElementById('openm')
const closem=document.getElementById('closem')
const modalm=document.getElementById('modalm')

//modal mision
openm.addEventListener('click',()=>{
    modalm.classList.add('show');
    
});

closem.addEventListener('click',()=>{
    modalm.classList.remove('show');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modalm.classList.remove('show');
    }
});

//vision
const openv=document.getElementById('openv')
const closev=document.getElementById('closev')
const modalv=document.getElementById('modalv')

//modal vision
openv.addEventListener('click',()=>{
    modalv.classList.add('show');
    
});

closev.addEventListener('click',()=>{
    modalv.classList.remove('show');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modalv.classList.remove('show');
    }
});
//politicas
const openp=document.getElementById('openp')
const closep=document.getElementById('closep')
const modalp=document.getElementById('modalp')

//modal politicas
openp.addEventListener('click',()=>{
    modalp.classList.add('show');
    
});

closep.addEventListener('click',()=>{
    modalp.classList.remove('show');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modalp.classList.remove('show');
    }
});