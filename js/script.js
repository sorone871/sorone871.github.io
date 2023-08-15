document.addEventListener('DOMContentLoaded', function(){
    //Seleccionar elemento
    const inputNombre = document.querySelector('#nombre');
    const inputTelefono = document.querySelector('#telefono');
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    inputNombre.addEventListener('blur', validar);
    inputTelefono.addEventListener('blur', validar);
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    
    function validar(e){
        //trim sirve para eliminar espacios en blanco
        //
        
        if (e.target.value.trim()==='') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio.`, e.target.parentElement);
        }else{
            console.log('esta lleno');
        }
    }

    function mostrarAlerta(mensaje, referencia) {
        //Comprobar si ya existe una alerta
        const alerta = document.querySelector('.p')
        if (alerta) {
            alerta.remove();
        }

        
        //Generar alerta en el HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('p');
    
        //Inyectar el error al formulario
        referencia.appendChild(error);
       // formulario.innerHTML.error;
    }
});


let menuVisible = false;
const verMas = document.querySelector('#sobremi');//SOBRE ID

  
cargarEventos();
function cargarEventos() {
    verMas.addEventListener('click', darClick);
    /*verMas.addEventListener('click', (e) => {
        divClick()
    });*/   
}

function mostrarDiv(){
    console.log();
}
function darClick(e) {
    if (e.target.classList.contains('juegos') 
    || e.target.classList.contains('musica') 
    || e.target.classList.contains('arte')
    || e.target.classList.contains('peliculas')) {
       
        const interesSeleccionado=e.target;
        leerDato(interesSeleccionado);    
    }else if (e.target.classList.contains('fa-solid')
    || e.target.classList.contains('informacion')) {
        const interesSeleccionado2=e.target.parentElement;
        leerDato(interesSeleccionado2); 
        
    }
        
    
}
function leerDato(interes) {
    const info={
        //imagen: interes.querySelector('i').textContent,
        texto: interes.querySelector('span').textContent,
       // contenedor: interes.querySelector('div').textContent
    }

    console.log(info)
}

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Animacion de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >=300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("ejemplo");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajoenequipo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }     
}
//optimisar animacion de habilidades si detecta el scroll
window.onscroll = function() {
    efectoHabilidades();
}


