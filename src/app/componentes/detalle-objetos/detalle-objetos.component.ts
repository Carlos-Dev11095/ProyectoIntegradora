import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataObjeto1 } from 'src/app/interfaces/interfaces';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-detalle-objetos',
  templateUrl: './detalle-objetos.component.html',
  styleUrls: ['./detalle-objetos.component.scss'],
})
export class DetalleObjetosComponent implements OnInit {
//declaración de consulta y modal
  constructor(private servicioConsulta:ConsultasService, private modalCtrl:ModalController) { }
  //Recepción de id
  @Input()id: number;
  //declaración de objeto para interfaz con detalles del objeto a mostrar
  objeto:DataObjeto1={};
  //función para cierre de ventana modal
  regresar() {
    this.modalCtrl.dismiss();
    }

  ngOnInit() {
    ///Recuperación de datos en DataObjeto1 mediante la funcion getObjeto enviando
    //el id, posteriormentes se realiza asignación al objeto "objetos"
    this.servicioConsulta.getObjeto(this.id)
    .subscribe((resp:DataObjeto1)=>{
      console.log('Objeto',resp)
      this.objeto=resp;
    })

  }

}
