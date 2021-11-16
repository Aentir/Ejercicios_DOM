window.onload = function(){
    let titulo = document.getElementById("main_titulo");
    let info = document.getElementById("main_titulo").textContent;

    titulo.addEventListener("mousemove", () => {
        titulo.innerHTML = "Coordenadas X: " + event.clientX + 
        "Coordenadas Y: " + event.clientY;
    })

    titulo.addEventListener("mouseout", () => {
        titulo.innerHTML = info;
    })
}