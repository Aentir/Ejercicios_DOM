window.onload = function(){
    let title = document.querySelectorAll("h1")[0];
   
    let botonP = document.createElement("button");
    let botonS = document.createElement("button");

    title.addEventListener("click", () => {
        botonP.innerHTML = "Obtener párrafos";
        document.querySelectorAll("h1")[0].appendChild(botonP);

        botonS.innerHTML = "Sumar";
        document.querySelectorAll("h1")[0].appendChild(botonS);
    })


    let filas = document.getElementById("firstTable").rows;

    botonP.addEventListener("click", () => {
        for (let i = 0; i < filas.length; i++){

            let cells = filas[i].cells;

            if (filas[i] == filas[filas.length-1]){
                for (let i = 0; i < cells.length; i++){
                    cells[i].innerHTML = "Sumar";
                }
            } else {
                for (let j = 0; j < cells.length; j++){
                    let randNum = Math.floor(Math.random() * 10);
                    cells[j].innerHTML = randNum;
                }
            } 
        }
    })

    botonS.addEventListener("click", () => {
        let suma = 0;
        for (let i = 0; i < filas.length; i++){

            let cellSum = filas[i].cells;

            for (let j = 0; j < cellSum.length; j++){
                //suma += cellSum[j];
                //cellSum[j].innerHTML = suma;
                console.log(cellSum[j]);
                //console.log(suma);
            }
        }
    })


}