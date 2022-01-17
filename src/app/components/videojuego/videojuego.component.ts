import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Videojuego, VideojuegoService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
})
export class VideojuegoComponent implements OnInit {

  videojuego: any = {};

  constructor( private _videojuegosService: VideojuegoService , private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.videojuego= this._videojuegosService.getVideojuego( params['id'] );
    });    
  }

  ngOnInit(): void {
  }

}
