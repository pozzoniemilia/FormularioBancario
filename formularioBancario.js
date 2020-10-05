const formulario = document.getElementById("formularioBancario")

window.onload = validacion;

function validacion(){
    document.getElementById("enviar").addEventListener('click',comprarDolares,false);
}

function validarNombre(){
    const nombreUsuario= document.getElementById("nombre");
    if (nombreUsuario.value == ""){
       alert("El campo nombre no puede estar vacio");
        return false;
   }
   else return true;
}

function validarMayoría(){
   const mayoriaEdad = document.getElementById("mayoria");
    if (!mayoriaEdad.checked){
        alert("No estás autorizado a comprar dólares porque sos menor de edad");
        return false;
    }
    else return true;
}

function validarATP(){
    const cobrarATP = document.getElementById("ATP");
     if (cobrarATP.checked){
         alert("No estás autorizado a comprar dólares porque percibiste el ATP");
         return false;
     }
     else return true;
 }
//
//function validarCompraPasada(){
    //const compraPasada= document.getElementById("dolaresComprados");
    //if (compraPasada >= 200){
        //return false;
   //}
   //else return true;
//}


 //function comprarDolares(e){
     //if (validarNombre () && validarMayoría() && validarATP() && validarCompraPasada == true){
        //alert("Estás autorizado para comprar dólares")
    //} else {
        //alert("No estás autorizado para comprar dólares")
    //}
 //}


function comprarDolares(e){
    if (validarNombre () && validarMayoría() && validarATP() == true){
        alert("Estás autorizado para comprar dólares")
    } else {
        alert("No estás autorizado para comprar dólares")
    }
}


