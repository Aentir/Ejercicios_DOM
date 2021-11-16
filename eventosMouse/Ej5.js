window.onload = function(){
    let titulo = document.getElementById("main_titulo");
    let parrafos = document.getElementsByTagName("p");

    for (let i = 0; i < parrafos.length; i++){
        titulo.addEventListener("mouseover", () => {
            parrafos[i].style.display = "none";
        })

        titulo.addEventListener("mouseout", () => {
            parrafos[i].style.display = "";
        })
    }
}