window.onload = function(){
    let titulo = document.getElementById("main_titulo");
    let tabla = document.querySelectorAll("td");
    console.log(tabla);
    
    titulo.addEventListener("click", () => {
        for (let i = 0; i < tabla.length; i++){
            tabla[i].innerHTML = "click";
            tabla[i].addEventListener("click", () => {
                tabla[i].innerHTML = prompt("Introduce nueva información: ");
            })
        }
    })

    titulo.addEventListener("click", () => {
        for (let i = 0; i < tabla.length; i++){
            tabla[i].innerHTML = "click";
        }
    })
}