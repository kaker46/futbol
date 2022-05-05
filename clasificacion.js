
console.log("hola")

function getData() {
    const url = "https://api.football-data.org/v2/competitions/2014/standings";
    fetch(url, {
        method: "GET",
        headers:{
            "x-Auth-Token":"7782d1cd5f4d490f9b92030287b111e8"

        }
    }).then(response => {
        if(response.ok) return response.json();
    }).then(data=>{
        console.log(data);
        clasi(data.standings[0].table);
    })
};
getData();



let tabla= clasificacion.standings[0].table

function clasi(tablaPuntos) {
    let body = document.getElementById("puntos");
// la linea de arriba indica donde se va a inyectar el contenido de abajo(dentro del html)

    for (let i = 0; i < tablaPuntos.length; i++) {
       console.log("puntos");
       let row = document.createElement("tr");   // aqui generamos la fila donde inyectaremos la informacion de cada uno de los partidos.esa informcion la pondremos dentros de celdas
       body.append(row);     // le estamos diciendo al codigo que la fila que generamos la tengo que meter en la variable body
       
       let posicion = document.createElement("td");   // es la primera celda/columna dentro de la fila
       posicion.innerHTML=tablaPuntos[i].position
       row.append(posicion);
       console.log(tablaPuntos[i].position)

       let escudo = document.createElement("td");   // es la segunda celda/columna dentro de la fila
       let imagen= document.createElement("img");
       escudo.append(imagen);
       imagen.setAttribute("src",tablaPuntos[i].team.crestUrl)
       row.append(escudo);
      // console.log(tablaPuntos[i].team.crestUrl.img="https://crests.football-data.org") 

       
       let equipo = document.createElement("td");   // es la tercera celda/columna dentro de la fila
       equipo.innerHTML=tablaPuntos[i].team.name
       row.append(equipo);
       console.log(tablaPuntos[i].team.name)
       
       let partidos = document.createElement("td");   // es la cuarta celda/columna dentro de la fila
       partidos.innerHTML=tablaPuntos[i].playedGames
       row.append(partidos);
       console.log(tablaPuntos[i].playedGames)

       let victorias = document.createElement("td");   // es la quinta celda/columna dentro de la fila
       victorias.innerHTML=tablaPuntos[i].won
       row.append(victorias);
       console.log(tablaPuntos[i].won)

       let empates = document.createElement("td");   // es la sexta celda/columna dentro de la fila
       empates.innerHTML=tablaPuntos[i].draw
       row.append(empates);
       console.log(tablaPuntos[i].draw)

       let perdidos = document.createElement("td");   // es la septima celda/columna dentro de la fila
       perdidos.innerHTML=tablaPuntos[i].lost
       row.append(perdidos);
       console.log(tablaPuntos[i].lost)

       let golesFavor = document.createElement("td");   // es la octava celda/columna dentro de la fila
       golesFavor.innerHTML=tablaPuntos[i].goalsFor
       row.append(golesFavor);
       console.log(tablaPuntos[i].goalsFor)

       let golesContra = document.createElement("td");   // es la novena celda/columna dentro de la fila
       golesContra.innerHTML=tablaPuntos[i].goalsAgainst
       row.append(golesContra);
       console.log(tablaPuntos[i].goalsAgainst)

       let puntitos = document.createElement("td");   // es la decima celda/columna dentro de la fila
       puntitos.innerHTML=tablaPuntos[i].points
       row.append(puntitos);
       console.log(tablaPuntos[i].points)
       

     }
    }

