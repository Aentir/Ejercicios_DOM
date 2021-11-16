window.onload = function(){
    let filas = document.querySelectorAll("td");
    
    for (let i = 0; i < filas.length; i++){
        filas[i].addEventListener("click", function(){
            filas[i].innerHTML = i + 1;
        })
    }
}