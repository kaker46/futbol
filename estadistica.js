console.log(data.matches)
console.log(clasificacion)



function porcentajeVictoriasCasa(ganados){


    let partidosjugados=[];
    let partidosganadoscasa=[];
    
    for (let i=0; i< ganados.length; i++){
        if (ganados[i].status == "FINISHED"){
          partidosjugados.push(ganados[i]);
        }

   if (ganados[i].score.winner == "HOME_TEAM"){
    partidosganadoscasa.push(ganados[i]);

  }
    }
    let resultado1 = (partidosganadoscasa.length / partidosjugados.length)*100;
    resultado1=resultado1.toFixed(2);
    
    let estadisticainjection=document.getElementById("goles");
    let stat2=document.createElement("li");
    
    stat2.innerHTML=" PORCENTAJE DE PARTIDOS GANADOS DE LOCAL:" + resultado1 + "%";
    estadisticainjection.append(stat2);
    
    }
    porcentajeVictoriasCasa(data.matches)
    
    function porcentajeempates(partidos){


      let partidosjugados=[];
      let partidosempatados=[];
      
      for (let i=0; i< partidos.length; i++){
         if (partidos[i].status == "FINISHED"){
           partidosjugados.push(partidos[i]);
         }
      
         if (partidos[i].score.winner == "DRAW"){
             partidosempatados.push(partidos[i]);
      
         }
      }
       
      let resultado = (partidosempatados.length / partidosjugados.length)*100;
      resultado=resultado.toFixed(2);
      
      let estadisticainjection=document.getElementById("goles");
      let stat1=document.createElement("li");
      
      stat1.innerHTML=" PORCENTAJE DE PARTIDOS EMPATADOS:" + resultado + "%";
      estadisticainjection.append(stat1);
      
      }
      porcentajeempates(data.matches)

      function porcentajeGanadosVisitante(partidos){


        let partidosjugados=[];
        let partidosGanadosVisitante=[];
        
        for (let i=0; i< partidos.length; i++){
           if (partidos[i].status == "FINISHED"){
             partidosjugados.push(partidos[i]);
           }
        
           if (partidos[i].score.winner == "AWAY_TEAM"){
            partidosGanadosVisitante.push(partidos[i]);
        
           }
        }
         
        let resultado = (partidosGanadosVisitante.length / partidosjugados.length)*100;
        resultado=resultado.toFixed(2);
        
        let estadisticainjection=document.getElementById("goles");
        let stat4=document.createElement("li");
        
        stat4.innerHTML=" PORCENTAJE DE PARTIDOS GANADOS DE VISITANTE:" + resultado + "%";
        estadisticainjection.append(stat4);
        
        }
        porcentajeGanadosVisitante(data.matches)
  


    function partidosSinJugar(partidos){

     
        let partidosTerminados=[]
        
        for (let i=0; i< partidos.length; i++){
          if (partidos[i].status == "FINISHED"){
              partidosTerminados.push(partidos[i]);
             
           }
       
           }

    let partidosSinJugar =(partidos.length - partidosTerminados.length)
    console.log(partidosSinJugar)
    let estadisticainjection=document.getElementById("goles");
    let stat3=document.createElement("li");
    
    stat3.innerHTML=" PARTIDOS QUE NO SE HAN JUGADO TODAVIA:" + partidosSinJugar ;
    estadisticainjection.append(stat3);

    }
    partidosSinJugar (data.matches)
        






   /* let goles=score;
    console.log(goles)


    function goles (goles3){
      let goles = document.getElementById("puntos");
       console.log("puntos")
      for (let i = 0; i < jornadas.length; i++) {
      
  }
  
    }
    goles(data.matches)*/






    let puntos1= clasificacion.standings[1].table

    function tablaPuntosCasa (mejorEquipoLocal){

      let body = document.getElementById("puntos");

      for (let i = 0; i < mejorEquipoLocal.length; i++) {
        let row = document.createElement("tr"); 
        body.append(row);  

        let posicion = document.createElement("td");  
        posicion.innerHTML=mejorEquipoLocal[i].position;
        row.append(posicion);
        console.log(mejorEquipoLocal[i].position)

        let equipo = document.createElement("td");  
        equipo.innerHTML=mejorEquipoLocal[i].team.name;
        row.append(equipo);
        console.log(mejorEquipoLocal[i].team.name)

      }

    }
    tablaPuntosCasa(puntos1)


    let puntos2= clasificacion.standings[2].table

    function tablaPuntosfuera (mejorEquipoVisitante){

      let body = document.getElementById("puntosfuera");

      for (let i = 0; i < mejorEquipoVisitante.length; i++) {
        let row = document.createElement("tr"); 
        body.append(row);  

        let posicion1 = document.createElement("td");  
        posicion1.innerHTML=mejorEquipoVisitante[i].position;
        row.append(posicion1);
        console.log(mejorEquipoVisitante[i].position)

        let equipo1 = document.createElement("td");  
        equipo1.innerHTML=mejorEquipoVisitante[i].team.name;
        row.append(equipo1);
        console.log(mejorEquipoVisitante[i].team.name)

      }

    }
    tablaPuntosfuera(puntos2)

