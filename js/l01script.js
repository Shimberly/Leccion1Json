/*
L01.Script
Lección 01 - Programación Script - 15 puntos

Cada item vale 1 Punto

1. Crear las clases Marker, Point, Link. 1Pt

2. Crear un función para crear un arreglo de objetos Marker, utilice el String strDatos para cargar los datos en esos objetos mediante constructores. 2Pt

3. Cargar la data de JSON y mostrar en la página web. 1 Pt.

4. Crear en HTML un formulario que luego será utilizado para insertar nuevos objetos Marker al JSON. Considerar los objetos internos. 1Pt

5.  Construir opciones para que objeto Market tenga las opciones de CRUD clases: create, update, read, detele. Se debe utilizar el evento onclick de un boton para guardar (update) la información del formulario en el Market correspondiente.
5pto. - Crear 1Pt, Update 2pt, Read 1 pto. Delete 1 pt.

6. Crear y utilizar un método que permita exportar o mostrar la información de todo el JSON. 1pt

*/

//Utilizar el siguiente [ String ]


function Marker(point, homeTeam,awayTeam,markerImage,information,fixture,capacity,link) {
    this.point = point;
    this.homeTeam=homeTeam;
    this.awayTeam=awayTeam;
    this.markerImage=markerImage;
    this.information=information;
    this.fixture=fixture;
    this.capacity=capacity;
    this.link = link;
      
}

function Point(lat, lng) {
    this.lat = lat;
    this.lng = lng;
      
}

function Link(url, title) {
    this.url = url;
    this.title = title;
      
}
var markers=[];

function cargarDatos(){
    var strDatos = [{"markers":[{"point":{"Lat":40.266044,"Lng":-74.718479},"homeTeam":"Lawrence Library","awayTeam":"LUGip","markerImage":"images/Red_Team_2048x2048.jpg","information":"Linux users group meets second Wednesday of each month.","fixture":"Wednesday 7pm","capacity":"20 users","url":{"link":"https://www.youtube.com/watch?v=hSwg4fIgthU","title":"Red Team"}},{"point":{"Lat":40.2116,"Lng":-74.695702},"homeTeam":"Hamilton Library","awayTeam":"LUGip HW SIG","markerImage":"images/Team-White.png","information":"Linux users can meet the first Tuesday of the month to work out harward and configuration issues.","fixture":"Tuesday 7pm","capacity":"45 Persons","url":{"link":"https://www.youtube.com/watch?v=hSwg4fIgthU","title":"White Team"}},{"point":{"Lat":40.294535,"Lng":-74.682012},"homeTeam":"Applebees","awayTeam":"After LUPip Mtg Spot","markerImage":"images/newcastle.jpg","information":"Some of us go there after the main LUGip meeting, drink brews, and talk.","fixture":"Wednesday whenever","capacity":"10 usuarios","url":{"link":"https://www.youtube.com/watch?v=hSwg4fIgthU","title":"Newcastle Team"}}]}];
    
    
    
    
    console.log(strDatos[0].markers[0].point.Lat);
    for(let i=0;i<strDatos[0].markers.length;i++){
        var dato=strDatos[0].markers[i];
        var point= new Point(dato.point.Lat,dato.point.Lng);
        var link= new Link(dato.url.link,dato.url.title);
        var marker= new Marker(point,dato.homeTeam,dato.awayTeam,dato.markerImage,dato.information,dato.fixture,dato.capacity,link);
        markers.push(marker);
    }
    console.log(markers.length);
}

function mostrarDatos(){
     

     
    
   //  console.log(markers[0].home);
    var table = document.getElementById("T1");
    for(let i =0; i< markers.length;i++){
        var fila = table.insertRow(i+2);
        let lat = fila.insertCell(0);
        let lng = fila.insertCell(1);
        let homeTeam= fila.insertCell(2);
        let awayTeam= fila.insertCell(3);
        let markerImage= fila.insertCell(4);
        let info= fila.insertCell(5);
        let fix= fila.insertCell(6);
        let cap= fila.insertCell(7);
        let url= fila.insertCell(8);
        let title= fila.insertCell(9);
     
        lat.innerHTML = markers[i].point.lat;
        lng.innerHTML = markers[i].point.lng;   
        homeTeam.innerHTML = markers[i].homeTeam; 
         awayTeam.innerHTML = markers[i].awayTeam;
        markerImage.innerHTML = markers[i].markerImage;   
        info.innerHTML = markers[i].information; 
        fix.innerHTML = markers[i].fixture;
         cap.innerHTML = markers[i].capacity;
        url.innerHTML = markers[i].link.url;   
        title.innerHTML = markers[i].link.title; 
    }
    
}
function agregar(){
    
    var datos = document.getElementsByTagName("input");
     
        var point= new Point(datos[0].value,datos[1].value);
        var link= new Link(datos[8].value,datos[9].value);
        var marker= new Marker(point,datos[2].value,datos[3].value,datos[4].value,datos[5].value,datos[6].value,datos[7].value,link);
        markers.push(marker);
    //for(let k =2; k<markers.length+2 ;i++){
         
         //   document.getElementById("T1").deleteRow(k);
           
         
    // }
    //mostrarDatos();
    alert("Se agrego un nuevo marker!!");
}


cargarDatos();
mostrarDatos();




















