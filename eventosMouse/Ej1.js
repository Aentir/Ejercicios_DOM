window.onload = function(){
    let parrafo = document.querySelectorAll("p")[0];

    parrafo.addEventListener("mouseover", () => {
        parrafo.style.background = "blue";
    })
}