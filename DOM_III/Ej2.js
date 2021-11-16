window.onload = function(){

    let ultimoParrafo = document.querySelectorAll("p")[4]
    let button = document.getElementById("infoDato");

    button.addEventListener("click", (evento) => {
        evento.preventDefault();
        let size = document.getElementById("infoForm").value;
            ultimoParrafo.style.fontSize = size + "px";
    })


}