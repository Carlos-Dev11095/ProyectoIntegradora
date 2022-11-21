import { Component, OnInit } from '@angular/core';
import { DataNivel } from 'src/app/interfaces/interfaces';
import { gameDB } from 'src/app/interfaces/interfaces';
import { DetalleNivelesComponent } from 'src/app/componentes/detalle-niveles/detalle-niveles.component';
import { ModalController } from '@ionic/angular';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.page.html',
  styleUrls: ['./niveles.page.scss'],
})
export class NivelesPage implements OnInit {

  niveles:DataNivel[]=[];

  constructor(private servicioConsulta: ConsultasService, private modalCtrl:ModalController) { }

async verDetalleNivel(id:number){
  const modal= await this.modalCtrl.create({
    component:DetalleNivelesComponent,
    componentProps:{id}
  });
  modal.present();
}

  ngOnInit() {
    this.servicioConsulta.getDatos()
    .subscribe((resp:gameDB)=>{
      console.log('Niveles',resp)
      this.niveles=resp.dataNiveles;
    })
  }

}
