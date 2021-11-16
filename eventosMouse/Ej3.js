window.onload = function(){
    let parrafo = document.querySelectorAll("p")[0];

    parrafo.addEventListener("mouseover", () => {
        parrafo.style.color = "blue";
    })

    parrafo.addEventListener("mouseout", () => {
        parrafo.style.color = "green";
    })
}