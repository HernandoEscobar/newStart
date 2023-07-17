function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    link.className = "seleccionado";
    // hacemos desaparecer el menu una vez que se haya selecionado en el modo responsive

    var x = document.getElementById("nav");
    x.className = "";
};

// funcion que muestra el menu responsive

function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className==="") {
        x.className = "responsive";
    } else {
        x.className = ""
    }
};


    // Animacion de entrada de seccion

window.addEventListener("scroll", function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
})