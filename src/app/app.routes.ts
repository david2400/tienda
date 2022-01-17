import { Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';"@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const APP_ROUTES:Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'videojuego/:id', component: VideojuegoComponent},
    {path: 'videojuegos', component: VideojuegosComponent},
    {path: 'buscar/:termino', component: BuscadorComponent},
    {path: '**',pathMatch:'full',redirectTo:'home'},
];

export const APP_ROUTING= RouterModule.forRoot(APP_ROUTES);