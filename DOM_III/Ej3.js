window.onload = function(){

    let titulo = document.getElementById("titulo");
    let newDiv = document.getElementById("div_titulo");
    //Guardo la creación del div

    //Agrego el div como hijo del h1

    titulo.addEventListener("mouseover", () => {
        //newDiv.classList.toggle("grande");
        newDiv.className = "grande";
    })

    titulo.addEventListener("mouseout", () => {
        //newDiv.classList.remove("grande");
        newDiv.className = "";
    })
}