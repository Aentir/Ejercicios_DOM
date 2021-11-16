window.onload = function(){
    let parrafo = document.querySelectorAll("p")[1];

    parrafo.addEventListener("mouseover", () => {
        parrafo.style.background = "blue";
    })

    parrafo.addEventListener("mouseout", () => {
        parrafo.style.background = "";
    })
}