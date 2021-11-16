window.onload = function(){
    let parrafo = document.getElementById("p2");
    parrafo.addEventListener("click", function()
    {
        parrafo.style.fontSize = "30px";
        parrafo.style.textDecoration = "underline";
        parrafo.style.transform = "uppercase";
    })
}