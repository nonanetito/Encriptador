



function encriptarMensaje() {
    let mensaje=document.getElementsByName("texto")[0].value;
    console.log(mensaje);
    let comprobar=mensaje.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " 
);
    if(mensaje==""){
        alert("¡Ingrese un texto para ejecutar!");
        return;
    } 

    else if (mensaje!==comprobar){
        alert("¡No se permiten caracteres especiales!");
        return;
    } 

    else if (mensaje!==comprobar.toLowerCase()){
        alert ("¡No se aceptan mayusculas!");
        return;
    } 

        mensaje=mensaje.replace(/e/mg,"enter")
        mensaje=mensaje.replace(/i/mg,"imes")
        mensaje=mensaje.replace(/a/mg,"ai")
        mensaje=mensaje.replace(/o/mg,"ober")
        mensaje=mensaje.replace(/u/mg,"ufat")
        
    
    let mensajeNuevo=mensaje
    document.querySelector(".enc__boton__copy").style.visibility = "inherit"
    document.querySelector(".contenedorEncriptados").innerHTML=mensajeNuevo
}



function desencriptarMensaje() {
    let mensaje=document.getElementsByName("texto")[0].value;
    console.log(mensaje);
    let comprobar=mensaje.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " 
);
    if(mensaje==""){
        alert("¡Ingrese un texto para ejecutar!");
        return;
    } 

    if (mensaje!==comprobar){
        alert("¡No se permiten caracteres especiales!");
        return;
    } 

    else if (mensaje!==comprobar.toLowerCase()){
        alert ("¡No se aceptan mayusculas!");
        return;
    } 

        mensaje=mensaje.replace(/enter/mg,"e")
        mensaje=mensaje.replace(/imes/mg,"i")
        mensaje=mensaje.replace(/ai/mg,"a")
        mensaje=mensaje.replace(/ober/mg,"o")
        mensaje=mensaje.replace(/ufat/mg,"u")

    

    let mensajeNuevo=mensaje
    document.querySelector(".enc__boton__copy").style.visibility = "inherit"
    document.querySelector(".contenedorEncriptados").innerHTML=mensajeNuevo
}



function copiar() {
    // Selecciona el elemento que contiene el texto encriptado/desencriptado
    let contenido = document.querySelector(".contenedorEncriptados");

    // Crea un elemento de texto temporal para copiar su contenido
    let tempInput = document.createElement("textarea");
    tempInput.value = contenido.textContent;  // O contenido.innerText para evitar copiar código HTML si es que lo hubiera
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Texto copiado al portapapeles");
}


