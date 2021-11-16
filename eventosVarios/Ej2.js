window.onload = function(){
    let titulo = document.getElementById("main_titulo");
    let originalTable= document.getElementById("info_tabla_1");
    let filas = originalTable.querySelectorAll("tr");

    let paises = ["España", "Francia", "Alemania", "Italia", "Rusia"];

    titulo.addEventListener("click", () => {
        for (let i = 0; i < filas.length; i++){
            filas[i].innerHTML = "<a href='https://www.google.es/'>" + paises[i] + "</a>"
        }
    })

    //Debo meter en un array vación lo que devuelve la busqueda de trs,
    //Porque devuelve un array de objetos html y no se pueden tratar como HTML normal
    let array = []
    for (let i = 0; i < filas.length; i++){
        array.push(filas[i].innerHTML);
    }
    //console.log(array);

    titulo.addEventListener("dblclick", () => {
        for (let i = 0; i < filas.length; i++){
            //console.log(typeof filas[1]);
            filas[i].innerHTML = array[i];
        }
    })
}