document.addEventListener('DOMContentLoaded', function(){
    //Seleccionar elemento
    const inputNombre = document.querySelector('#nombre');
    const inputTelefono = document.querySelector('#telefono');
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    let formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const spinner = document.querySelector('#spinner');
    const email={
        nombre: '',
        telefono: '',
        email: '',
        asunto: '',
        mensaje: ''
    }

    inputNombre.addEventListener('input', validar);
    inputTelefono.addEventListener('input', validar);
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail);

    //formulario.reset();
    //comprobarEmail();
     
    function enviarEmail(e){
      //  e.preventDefault();

        console.log('Cargando....');
        document.getElementById('spinner').style.display = "flex";

        setTimeout(() => {
            document.getElementById('spinner').style.display = "none";
            //resetFormulario();
           //alerta 
           swal({
            title: 'Exito',
            text: 'Se envio el correo',
            icon: 'success'
            });
        }, 500);
        //e.preventDefault(false);
    }

    function validar(e){
        //trim sirve para eliminar espacios en blanco
        if (e.target.value.trim()==='') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio.`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarFormulario();
            return;
        }

        //validacion de email 
        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarFormulario();
            return;
        }
        
        limpiarAlerta(e.target.parentElement);

        //asignar los valores                       //este todo en minuscula
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        //comprobar el objeto
        comprobarFormulario();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        
        //Generar alerta en el HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('p');
    
        //Inyectar el error al formulario
        referencia.appendChild(error);
       // formulario.innerHTML.error;
    }

    function limpiarAlerta(referencia){
        //Comprobar si ya existe una alerta

        const alerta = referencia.querySelector('.p');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email){
       const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
       const resultado = regex.test(email);
       //console.log(resultado);
       return(resultado);
    }

    function comprobarFormulario(){
        //console.log(Object.values(email).includes(''));
        console.log(email)
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('bg-red-600');
            btnSubmit.disabled=true;
            return;
        }
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled=false;
        
    }

    function resetFormulario(){
         //reiniciar el formulario
         nombre.nombre = '';
         telefono.telefono = '';
         email.email = '';
         asunto.asunto = '';
         mensaje.mensaje = '';
         
         formulario.reset();

    }
});


let menuVisible = false;
let interesesVisible = false;
const verMas = document.querySelector('#sobremi');//SOBRE ID
const juegos =['league of legends', 'World of Warcraft', 'Halo'];
const musica =['Rap', 'Reggae', 'Rock', 'Metal'];
const arte =['Urbano', 'Lettering', 'Pintura', 'Cine'];
const peliculas =['Ciencia Ficcion', 'Drama', 'Fantasia'];
  
cargarEventos();
function cargarEventos() {
    verMas.addEventListener('click', darClick);
    /*verMas.addEventListener('click', (e) => {
        divClick()
    });*/   
}

function mostrarDiv(){
    console.log('ola');

   //document.getElementById("juegos-div").style.display = 'flex'
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

function mostrarOcultarIntereses() {
    if (interesesVisible) {
        document.getElementById("juegos-div").classList = "interes-responsive";
        interesesVisible = false;
    }else{
        document.getElementById("juegos-div").classList = "interes-responsive";
        interesesVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;

    //document.getElementById("juegos-div").classList = "interes-responsive";
    //interesesVisible = false;
}
//Animacion de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if (distancia_skills >=300) {
        let habilidades = document.getElementsByClassName("progreso");
        // habilidades[0].classList.add("Javascript");
        // habilidades[1].classList.add("htmlcss");
        // habilidades[2].classList.add("php");
        // habilidades[3].classList.add("ejemplo");
        habilidades[0].classList.add("comunicacion");
        habilidades[1].classList.add("trabajoenequipo");
        habilidades[2].classList.add("creatividad");
        habilidades[3].classList.add("dedicacion");
    }     
}
//optimisar animacion de habilidades si detecta el scroll
window.onscroll = function() {
    efectoHabilidades();
}


