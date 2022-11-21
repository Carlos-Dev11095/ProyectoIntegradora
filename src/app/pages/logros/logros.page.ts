import { Component, OnInit } from '@angular/core';
import { DetalleLogrosComponent } from 'src/app/componentes/detalle-logros/detalle-logros.component';
import { DataLogro } from 'src/app/interfaces/interfaces';
import { gameDB } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.page.html',
  styleUrls: ['./logros.page.scss'],
})
export class LogrosPage implements OnInit {

  logros:DataLogro[]=[];

  constructor(private servicioConsulta:ConsultasService, private modalCtrl:ModalController) { }

  async verDetalleLogros(id:number){
    const modal= await this.modalCtrl.create({
      component:DetalleLogrosComponent,
      componentProps:{id}
    });
    modal.present();
  }
  

  ngOnInit() {
    this.servicioConsulta.getDatos()
    .subscribe((resp:gameDB)=>{
      console.log('Logros',resp)
      this.logros=resp.dataLogros
    })

  }

}
