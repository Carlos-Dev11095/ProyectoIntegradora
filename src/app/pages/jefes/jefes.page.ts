import { Component, OnInit } from '@angular/core';
import { ConsultasService } from 'src/app/services/consultas.service';
import { gameDB } from 'src/app/interfaces/interfaces';
import { DataJefe } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleJefesComponent } from 'src/app/componentes/detalle-jefes/detalle-jefes.component';

@Component({
  selector: 'app-jefes',
  templateUrl: './jefes.page.html',
  styleUrls: ['./jefes.page.scss'],
})
export class JefesPage implements OnInit {

  jefes:DataJefe[]=[];

  constructor(private servicioConsulta:ConsultasService,private modalCtrl:ModalController) { }

  async verDetalleJefes(id:number){
    const modal= await this.modalCtrl.create({
      component:DetalleJefesComponent,
      componentProps:{id}
    });
    modal.present();
  }

  ngOnInit() {
    this.servicioConsulta.getDatos()
    .subscribe((resp:gameDB)=>{
      console.log('Jefes',resp)
      this.jefes=resp.dataJefes
    })
  }

}
