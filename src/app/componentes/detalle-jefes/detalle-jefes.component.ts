import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataJefe1 } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-detalle-jefes',
  templateUrl: './detalle-jefes.component.html',
  styleUrls: ['./detalle-jefes.component.scss'],
})
export class DetalleJefesComponent implements OnInit {

  constructor(private servicioConsulta:ConsultasService, private modalCtrl:ModalController) { }
  @Input()id:number;
  jefe:DataJefe1={};

  regresar() {
    this.modalCtrl.dismiss();
    }

  ngOnInit() {
    this.servicioConsulta.getJefe(this.id)
    .subscribe((resp:DataJefe1)=>{
      console.log('Jefe',resp)
      this.jefe=resp
    })
  }

}
