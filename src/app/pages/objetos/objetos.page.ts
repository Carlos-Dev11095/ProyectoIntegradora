import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { gameDB } from 'src/app/interfaces/interfaces';
import { DataObjeto } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleObjetosComponent } from 'src/app/componentes/detalle-objetos/detalle-objetos.component';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.page.html',
  styleUrls: ['./objetos.page.scss'],
})
export class ObjetosPage implements OnInit {
//ObjetoCon ingormación completa de los objetos del juego
  objetos:DataObjeto[]=[];
//Declaración para consulta y modal
  constructor(private servicioConsulta:ConsultasService, private modalCtrl:ModalController) { }
//Funcion asyncrona que nos permite el envio de ID al detalle del objeto seleccionado
  async verDetalleObjeto(id:number){
    const modal= await this.modalCtrl.create({
      component:DetalleObjetosComponent,
      componentProps:{id}
    });
    modal.present(); //Presentación de la ventana modal
  }

  ngOnInit() {
//Recuperación de datos en gameDB para su asignación al objeto "objetos"
    this.servicioConsulta.getDatos()
    .subscribe((resp:gameDB)=>{
      console.log('Objetos',resp)
      this.objetos=resp.dataObjetos
    })
  }

}
