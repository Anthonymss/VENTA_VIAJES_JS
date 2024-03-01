import {barcelona,roma,paris,londres} from './ciudades.js'

let enlaces=document.querySelectorAll('a')
let tituloElemento=document.getElementById('titulo') 
let subTituloElemento=document.getElementById('subtitulo') 
let parrafoElemento=document.getElementById('parrafo') 
let precioElemento=document.getElementById('precio') 

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })

    
    //agregar active
    this.classList.add('active');
    //traer contenido
    let contenido=obtenerContenido(this.textContent);
    //mostrar contenido
    tituloElemento.innerHTML=contenido.titulo
    subTituloElemento.innerHTML=contenido.subtitulo
    parrafoElemento.innerHTML=contenido.parrafo 
    precioElemento.innerHTML='PRECIO: '+contenido.precio+" euros"
    })
});
//funcion para traer la info de las ciudades
function obtenerContenido(enlace){
    let contenido={
        'Barcelona':barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres
    };
    return contenido[enlace];
}
