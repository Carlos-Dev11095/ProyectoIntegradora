import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataLogro1 } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-detalle-logros',
  templateUrl: './detalle-logros.component.html',
  styleUrls: ['./detalle-logros.component.scss'],
})
export class DetalleLogrosComponent implements OnInit {

  constructor(private servicioConsulta:ConsultasService, private modalCtrl:ModalController) { }
  @Input()id:number;
  logro:DataLogro1={};

  regresar() {
    this.modalCtrl.dismiss();
    }

  ngOnInit() {
    this.servicioConsulta.getLogro(this.id)
    .subscribe((resp:DataLogro1)=>{
      console.log('Logro',resp)
      this.logro=resp;
    })
  }

}
