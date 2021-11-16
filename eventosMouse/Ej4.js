window.onload = function(){
    let parrafo = document.querySelectorAll("p")[0];

    parrafo.addEventListener("mouseover", () => {
        parrafo.style.display = "none";
    })

    parrafo.addEventListener("mouseout", () => {
        parrafo.style.display = "";
    })
}