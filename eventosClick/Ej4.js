window.onload = function(){
    let parrafos = document.querySelectorAll("p");

    for (let i = 0; i < parrafos.length; i++){
        parrafos[i].addEventListener("click", function(){
            parrafos[i].style.display = "none";
        })
    }
}