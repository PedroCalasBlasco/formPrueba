
function inputName(value) {
    const salida = document.querySelector("#salida");
    
    // salida.innerHTML = value
}


function hazAlgo() {
    const inputNombre = document.querySelector("#inputNombre");
    const inputEdad = document.querySelector("#inputEdad");
    const inputEmail = document.querySelector("#inputEmail");
    const inputPassword = document.querySelector("#inputPassword");
    const salida = document.querySelector("#salida");

    const aficionesSelect = document.querySelector("#aficionesSelect");

    let aficiones = "";
    
    if (aficionesSelect.value == "1") {
        aficiones = "Deportes"  
    } else if (aficionesSelect.value == "2") {
        aficiones = "Lectura"
    } else if (aficionesSelect.value == "3") {
        aficiones = "Viajar"
    } else {
        aficiones = "No has seleccionado Nada"
    }
    

    console.log(aficionesSelect.value);


    salida.innerHTML = `<h3 class="mt-5">Nombre</h3><h5>"${inputNombre.value}"</h5>
                        <h3 class="mt-5">Edad</h3><h5>"${inputEdad.value}"</h5> 
                        <h3 class="mt-5">Nombre</h3><h5>"${inputEmail.value}"</h5> 
                        <h3 class="mt-5">Nombre</h3><h5>"${inputPassword.value}"</h5> 
                        <h3 class="mt-5">Aficiones</h3><h5>"${aficiones}"</h5>  `


}



