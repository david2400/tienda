import { Injectable } from "@angular/core";
@Injectable()
export class VideojuegoService {

    private videojuegos:Videojuego[]=[
        {
            nombre:'Fornite',
            descripcion:'',
            img:'assets/img/juegos/fornite.png',
            lanzamiento:'2017',
            consola:'PS4'
        },{
            nombre:'Warzone',
            descripcion:'',
            img:'assets/img/juegos/warzone.jpeg',
            lanzamiento:'2018',
            consola:'PS4'
        },{
            nombre:'Gears Of War 5',
            descripcion:'',
            img:'assets/img/juegos/gearsofwar5.jpg',
            lanzamiento:'2015',
            consola:'PS4'
        },{
            nombre: 'Uncharted 4',
            descripcion: 'Uncharted 4: El Desenlace del Ladrón es la llegada de Nathan Drake ' +
              'a la nueva generación de videojuegos, en una cuarta parte de la serie desarrollada ' +
              'por Naughty Dog que nos llevará de nuevo a vivir aventuras en los lugares más ' +
              'recónditos del mundo.',
            img:'assets/img/juegos/uncharted4.jpeg',
            lanzamiento: '2016',
            consola:'PS4'
        },{
            nombre: 'God of War',
            descripcion: 'El videojuego se centra en la historia de la mitología nórdica, ' +
              'a diferencia de los títulos anteriores, que se ubicaban en la Antigua Grecia y ' +
              'su mitología. Con el cambio de cultura, hacen su aparición espacios míticos como ' +
              'el árbol de Yggdrasil y criaturas como la serpiente Jörmungandr.',
            img:'assets/img/juegos/god_of_war_4.jpg',
            lanzamiento: '2018',
            consola:'PS4'
        },{
            nombre: 'Grand Theft Auto V',
            descripcion: 'Grand Theft Auto V es el juego de mundo abierto más grande, ' +
                'más dinámico y más diverso jamás creado. Combina la historia y la jugabilidad ' +
                'de un modo nuevo, mientras los jugadores entran y salen repetidamente de las ' +
                'vidas de los tres personajes principales.',
            img:'assets/img/juegos/gta_v.jpg',
            lanzamiento: '2013',
            consola:'PS4'
        },{
        nombre: 'assassins creed valhalla',
        descripcion: 'Assassins Creed Valhalla es una nueva entrega de la saga de aventura y acción ' +
            'histórica a cargo de Ubisoft para PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series X ' +
            'y Stadia ambientada en la era vikinga. Ponte en la piel de Eivor y lidera a tu clan desde los ' +
            'gélidos páramos de Noruega hasta un nuevo hogar en los exuberantes campos de la Inglaterra del ' +
            'siglo IX. Funda tu asentamiento, conquista esa tierra hostil cueste lo que cueste y gánate un ' +
            'lugar en el Valhalla. La Inglaterra de la era vikinga es una nación fracturada, plagada de ruines ' +
            'señores feudales y reinos en guerra, pero bajo ese caos yace una tierra rica e indómita que aguarda ' +
            'a que alguien la conquiste',
        img:'assets/img/juegos/assassins_creed_valhalla.png',
        lanzamiento: '2020',
        consola:'PS4'
        },

    ];

    constructor(){

    }

    getVideojuegos():Videojuego[]{
        return this.videojuegos;
    }

    getVideojuego(id:number){
        return this.videojuegos[id];
    }
    buscarVideojuegos(termino:string):Videojuego[]{
        let videos:Videojuego[] = [];
        termino=termino.toLowerCase();
        for(let videojuego of this.videojuegos){
            let nombre = videojuego.nombre.toLowerCase();
            if(nombre.indexOf(termino)>=0 ){
                videos.push(videojuego);

            }
        }
        return videos;
    }

}

export interface Videojuego{
    nombre:String,
    descripcion:String,
    img:String,
    lanzamiento:String,
    consola:String,
}
