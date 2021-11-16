window.onload = function(){

    let parrafo = document.querySelectorAll("p")[0];
    let infoParrafo = document.querySelectorAll("p")[0].textContent;
    parrafo.addEventListener("mousedown", () => {
        parrafo.style.color = "red";
        parrafo.innerHTML = "Tienes el cursor del ratón pulsado"
    })

    parrafo.addEventListener("mouseup", () => {
        parrafo.style.color = "";
        parrafo.innerHTML = infoParrafo
    })
}