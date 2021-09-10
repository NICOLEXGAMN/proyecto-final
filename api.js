var ajolote = animal
    var element = document.getElementById("elem");
    element.innerHTML="";

    covid=document.getElementById("covidtxt").value;
    console.log("ajolote + animal);
        

    const url = "https://theaxolotlapi.netlify.app/";

    fetch(url+covid)
    .then(function(response){
        return response.json();    
    })


    .then(function(data){
        long=data.length;
        console.log("lenght:"+ long);
        console.log(data);

            var div=crearNodo("div");
            var recuperadostotales=crearNodo("p");
            var pais=crearNodo("p");
            var actualizacionU=crearNodo("p");
            var informacion=crearNodo("p")
            var datos=crearNodo("p")

            
            adjuntar(div,pais);
            adjuntar(div,casostotales)
            adjuntar(div,recuperadostotales);
            adjuntar(div,muertes)
            adjuntar(div,actualizacionU);
            adjuntar(element,div); 
            
        
    })

        .catch(function(error){
        console.log(error)

    });
    function crearNodo(elemento){
        return document.createElement(elemento);
    } 
    function adjuntar(padre,hijo){
        return padre.appendChild(hijo);

    }
}