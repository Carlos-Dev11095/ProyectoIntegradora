import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  opcionesSlide={
    slidesPerView:1,
    freeMode:false
  }
  constructor() { }

  ngOnInit() {
  }

}
