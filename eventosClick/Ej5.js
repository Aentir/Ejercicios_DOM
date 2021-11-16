window.onload = function(){
     let filas = document.querySelectorAll("tr");
    
    for (let i = 0; i < filas.length; i++){
        filas[i].addEventListener("click", function(){
            filas[i].innerHTML = "Esta es la: " + filas[i].className + " fila de la tabla";
        })
    }
}