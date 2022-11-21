import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http:HttpClient) { }
//Obj con toda la info de la base
  getDatos(){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB.json');
  }
//Obtiene detalles del personaje mediante id
  getPersonaje(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataPersonaje/'+id+'.json');
  }
//Obtiene detalles del los objetos mediante id
  getObjeto(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataObjetos/'+id+'.json');
  }
//Obtiene detalles de los enemigos mediante id
  getEnemigo(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataEnemigos/'+id+'.json');
  }
//Obtiene detalles de los jefes mediante id
  getJefe(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataJefes/'+id+'.json');
  }
//Obtiene detalles de los logros mediante id
  getLogro(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataLogros/'+id+'.json');
  }
//Obtiene detalles de los niveles mediante id
  getNivel(id:number){
    return this.http.get('https://final-f9b9d-default-rtdb.firebaseio.com/gameDB/dataNiveles/'+id+'.json');
  }



}
