window.onload = function(){

    let cuerpo = document.querySelector("body");

    alert("Introduce alguna de las siguientes letras: A, B, C, D, E");

    cuerpo.addEventListener("keyup", (event) => {
        let keyword = event.key;    //Leo que tecla se está pulsando

        let colores = {
            'A':  "one",
            'B': "two",
            'C': "three",
            'D': "four",
            'E': "five"
        }
        document.body.className = colores[keyword];
    })

    /*cuerpo.addEventListener("keyup", (event) => {
        
        if (event.key == "A") {
            cuerpo.className = "one";
        } else if (event.key == "B") {
            cuerpo.className = "two";
        } else if (event.key == "C") {
            cuerpo.className = "three";
        } else if (event.key == "D") {
            cuerpo.className = "four";
        } else {
            cuerpo.className = "five";
        }
        console.log(event.key);
    })*/


    /*var estilo = document.querySelector("body");

    document.addEventListener("keydown", function(){
    switch(event.key){
    case "A": estilo.className = "one"; break;
    case "B": estilo.className = "two"; break;
    case "C": estilo.className = "three"; break;
    case "D": estilo.className = "four"; break;
    case "E": estilo.className = "five"; break;
    default: alert("Por favor, pon una de las letras que se te indican.");
    }
    });*/

}