window.onload = function(){
    let parrafo = document.getElementById("p3");
    parrafo.addEventListener("click", function(){
        parrafo.innerHTML = "Este parrafo ya no es lo que era";
        parrafo.style.fontStyle = "italic";
        parrafo.style.fontStyle = "Arial";
    })
}