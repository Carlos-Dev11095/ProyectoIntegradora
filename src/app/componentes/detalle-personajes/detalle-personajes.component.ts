import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataPersonaje1 } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-detalle-personajes',
  templateUrl: './detalle-personajes.component.html',
  styleUrls: ['./detalle-personajes.component.scss'],
})
export class DetallePersonajesComponent implements OnInit {

  constructor(private servicioConsulta: ConsultasService,private modalCtrl:ModalController) { }
  @Input()id: number;
  personajePrincipal: DataPersonaje1={};

  regresar() {
    this.modalCtrl.dismiss();
    }

  ngOnInit() {
    this.servicioConsulta.getPersonaje(this.id)
    .subscribe((resp:DataPersonaje1)=>{
      console.log('Personaje',resp)
      this.personajePrincipal=resp;
    })
  }
}
