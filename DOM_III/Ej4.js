window.onload = function (){
    let pixelesDesplazados;
    let style = document.querySelector("body");

    window.addEventListener("scroll", () => {

        pixelesDesplazados = scrollY;
        console.log(pixelesDesplazados);

        if(scrollY < 500){
            style.className = "one";
        } else if (scrollY < 1000 && pixelesDesplazados >= 500){
            style.className = "two";
        } else if (scrollY < 1500 && pixelesDesplazados >= 1000){
            style.className = "three";
        } else if (scrollY < 2000 && pixelesDesplazados >= 1500){
            style.className = "four";
        } else {
            style.className = "five";
        }

    })
    
}