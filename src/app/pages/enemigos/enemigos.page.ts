import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { gameDB } from 'src/app/interfaces/interfaces';
import { DataEnemigo } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleEnemigosComponent } from 'src/app/componentes/detalle-enemigos/detalle-enemigos.component';

@Component({
  selector: 'app-enemigos',
  templateUrl: './enemigos.page.html',
  styleUrls: ['./enemigos.page.scss'],
})
export class EnemigosPage implements OnInit {

  enemigos:DataEnemigo[]=[];

  constructor(private servicioConsulta:ConsultasService, private modalCtrl:ModalController) { }

  async verDetalleEnemigos(id:number){
    const modal= await this.modalCtrl.create({
      component:DetalleEnemigosComponent,
      componentProps:{id}
      });
      modal.present();
  }

  ngOnInit() {
    this.servicioConsulta.getDatos()
    .subscribe((resp:gameDB)=>{
      console.log('Enemigos',resp)
      this.enemigos=resp.dataEnemigos
    })
  }

}
