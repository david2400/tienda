import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Videojuego, VideojuegoService } from 'src/app/services/videojuegos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  videojuegos : any[]=[];
  termino : string ="";

  constructor( private _videojuegosService: VideojuegoService , private activatedRoute:ActivatedRoute, private router: Router){ }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.videojuegos = this._videojuegosService.buscarVideojuegos(params['termino'])
    })
  }

  verVideojuego(idx: number) {
    this.router.navigate(['/videojuego/', idx]);
  }

}
