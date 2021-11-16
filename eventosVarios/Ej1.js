window.onload = function(){
    let titulo = document.getElementById("main_titulo");
    let tabla = document.getElementById("info_tabla_1")
    let filas = tabla.querySelectorAll("tr");
    
    titulo.addEventListener("dblclick", () => {
        for (let i = 0; i < filas.length; i++){
            filas[i].innerHTML = "Click aquí para eliminar: " + filas[i].className + " parrafo";
            filas[i].addEventListener("click", () => {
                filas[i].style.display = "none";
            })
        }
    })
    
}