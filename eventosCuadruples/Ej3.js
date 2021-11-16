window.onload = function(){
    let titulo = document.getElementById("main_titulo");

    titulo.addEventListener("dblclick", () => {
        titulo.style.transform = "rotate(25deg)";
    })

    titulo.addEventListener("click", () => {
        titulo.style.transform = "rotate(0deg)";
    })
}