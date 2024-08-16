window.addEventListener("load",function(){



    let imagen = document.querySelectorAll(".contenedorImagen");
    console.log(imagen);
    
    imagen.forEach(function(img) {
            const textOverlay = document.querySelector('.text-overlay');
        img.addEventListener("mouseover", function() {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 1s ease";
            img.style.overflow="hidden";
            img.style.background="black";
            img.style.filter="brightness(80%)"
            textOverlay.style.display="block"
            textOverlay.style.transition="transform 1s ease"

        });
    
        img.addEventListener("mouseout", function() {
            img.style.transform = "scale(1)";
            img.style.transition = "transform 1s ease";
            img.style.overflow="hidden";
            img.style.background="none";
            img.style.filter="brightness(100%)";
            textOverlay.style.display = 'none'
        });
    });
    
    let opcion =document.querySelectorAll(".dropdown-item");
    console.log(opcion);

//activar las opciones del menu//
opcion.forEach(function(opc) {
        opc.addEventListener("click", function(){


            // Elimina la clase 'active' de todos los elementos
            opcion.forEach(function(el) {
                            el.classList.remove('active');
            });
            
            //poner la opcion elegida como opcion frontal del dropdown
            let textoOpcion=opc.textContent
            console.log(textoOpcion);
            let opcFrente=document.getElementById("opcionFrente")
            opcFrente.innerHTML=(textoOpcion)

            // Agrega la clase 'active' solo al elemento clickeado
            opc.classList.add('active');


            let cartas=document.querySelectorAll(".carta")
            console.log(cartas);
            cartas.forEach(function(carta){
                carta.classList.remove("active")
                carta.classList.add("d-none")
            })
            

            //activar el div con el Id actual
            let hash=opc.hash
            console.log(hash);
            let seccion=document.querySelector(hash)
            console.log(seccion);
            seccion.classList.add("active")
            

});








    });

























})