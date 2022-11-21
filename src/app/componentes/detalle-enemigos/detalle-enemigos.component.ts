import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataEnemigo1 } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-detalle-enemigos',
  templateUrl: './detalle-enemigos.component.html',
  styleUrls: ['./detalle-enemigos.component.scss'],
})
export class DetalleEnemigosComponent implements OnInit {

  constructor(private servicioConsulta:ConsultasService, private modalCtrl:ModalController) { }
  @Input()id:number;
  enemigo:DataEnemigo1={};

  regresar() {
    this.modalCtrl.dismiss();
    }
    
  ngOnInit() {
    this.servicioConsulta.getEnemigo(this.id)
    .subscribe((resp:DataEnemigo1)=>{
      console.log('Enemigo',resp)
      this.enemigo=resp;
    })
  }

}
