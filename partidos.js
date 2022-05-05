console.log(data.matches)


function resultados(jornadas) {
    let body = document.getElementById("tabla");
// la linea de arriba indica donde se va a inyectar el contenido de abajo(dentro del html)
       body.innerHTML="";

    for (let i = 0; i < jornadas.length; i++) {
       console.log("tabla");
       let row = document.createElement("tr");   // aqui generamos la fila donde inyectaremos la informacion de cada uno de los partidos.esa informcion la pondremos dentros de celdas
       body.append(row);     // le estamos diciendo al codigo que la fila que generamos la tengo que meter en la variable body

        let jornada = document.createElement("td")
        row.append(jornada)
        jornada.append(jornadas[i].matchday+"º  Jornada")

        let escudolocal=document.createElement("td");
        let imagenlocal= document.createElement("img");
        escudolocal.append(imagenlocal);
        imagenlocal.setAttribute("src",`https://crests.football-data.org/${jornadas[i].homeTeam.id}.svg`)
        row.append(escudolocal);



 
       let equipoLocal = document.createElement("td");   // es la primera celda dentro de la fila
       row.append(equipoLocal);
       equipoLocal.append(jornadas[i].homeTeam.name);

        let resultadolocal = document.createElement("td")
        //row.append(resultadolocal)
        resultadolocal.append(jornadas[i].score.fullTime.homeTeam);

        let resultadoguion = document.createElement("td") 
        resultadoguion.append("-");
       
        let resultadovisi = document.createElement("td");   
        //row.append(resultadovisi);
        resultadovisi.append(jornadas[i].score.fullTime.awayTeam);

        row.append(resultadolocal,resultadoguion,resultadovisi)

       let equipoVisitante = document.createElement("td");   
       row.append(equipoVisitante);
       equipoVisitante.append(jornadas[i].awayTeam.name);



       let escudoVISI=document.createElement("td");
       let imagenVISI= document.createElement("img");
       escudoVISI.append(imagenVISI);
       imagenVISI.setAttribute("src",`https://crests.football-data.org/${jornadas[i].awayTeam.id}.svg`)
       row.append(escudoVISI);





       let estado = document.createElement("td");   
       row.append(estado);
       estado.append(jornadas[i].status);
    
        

    }
}
//resultados(data.matches)


function filtro (partidos) {

        let nombre=document.querySelector("#buscador").value;

        nombre=nombre.toLowerCase();

        console.log(nombre);

   if (nombre==""){
     resultados(partidos);   
   }
 
    else{
          let equipoSeleccionado=[];

       for (let i=0; i< partidos.length; i++){

         if (nombre==partidos[i].homeTeam.name.toLowerCase() || nombre==partidos[i].awayTeam.name.toLowerCase()){

            equipoSeleccionado.push(partidos[i]);

         }
      }   
        console.log(equipoSeleccionado);
        

        resultados(equipoSeleccionado);
       
    }
         

         
         let esEmpate=[];
            for (let k = 0; k <equipoSeleccionado.length; k++) {
            
            if (equipoSeleccionado[k].score.winner=="DRAW"){

            esEmpate.push(equipoSeleccionado[k]);}
            }
            
            console.log(esEmpate);
            

            filtro(esEmpate);
                
            
            
 }
filtro(data.matches)



  


  

