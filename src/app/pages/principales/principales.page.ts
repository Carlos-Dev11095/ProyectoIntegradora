import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { DataPersonaje } from 'src/app/interfaces/interfaces';
import { gameDB } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallePersonajesComponent } from 'src/app/componentes/detalle-personajes/detalle-personajes.component';
@Component({
  selector: 'app-principales',
  templateUrl: './principales.page.html',
  styleUrls: ['./principales.page.scss'],
})
export class PrincipalesPage implements OnInit {

  personajesPrincipales: DataPersonaje[]=[];


  constructor(private servicioConsulta:ConsultasService, private modalCtrl:ModalController) { }

  async verDetallePersonaje(id:number){
    /*Dado que es una petición (promesa) es un proceso
 asincrono espera la respuesta del componente modal
 al recibirla se vincula con la vista de detalle */
 const modal= await this.modalCtrl.create({
  component:DetallePersonajesComponent,
  componentProps:{id}
  });
  //Se visualisa el componente de detalle
  modal.present();
  }

  ngOnInit() {
    this.servicioConsulta.getDatos()
    .subscribe((resp:gameDB)=>{
      console.log('Principales',resp)
      this.personajesPrincipales=resp.dataPersonaje;
    })
  }

}
