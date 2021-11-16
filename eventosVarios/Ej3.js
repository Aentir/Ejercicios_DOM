window.onload = function(){
    let cabecera1 = document.getElementById("info_tabla_1").children[0];
    let rows1 = cabecera1.children[0].children;
    let cuerpo1 = document.getElementById("info_tabla_1").children[1].children[1].children;
    console.log(rows1);
    
    //celda[0].style.background = "red";
    //console.log(td);

    for (let i = 0; i < rows1.length; i++){
        rows1[i].addEventListener("mouseover", () =>{
            rows1[i].style.background = "red";
        })

        rows1[i].addEventListener("mouseout", () =>{
            rows1[i].style.background = "";
        })
    } 

    for (let i = 0; i < cuerpo1.length; i++){
        cuerpo1[i].addEventListener("mouseover", () =>{
            cuerpo1[i].style.background = "red";
        })

        cuerpo1[i].addEventListener("mouseout", () =>{
            cuerpo1[i].style.background = "";
        })
    }

    /*for (let i = 0; i < cabecera1.length; i++){
        cabecera1[i].addEventListener("mouseover", () =>{
            cuerpo1[i].style.background = "blue";
        })

        cabecera1[i].addEventListener("mouseout", () =>{
            cabecera1[i].style.background = "";
        })
    }*/
}