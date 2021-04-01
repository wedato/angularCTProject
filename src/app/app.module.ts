import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AnnonceComponent } from './annonce/annonce.component';
import {RouterModule , Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';





const route: Routes =  [
  { path: 'annonce' , component : AnnonceComponent},
  {path: 'listeAnnonce' , component: ListAnnoncesComponent},
  { path: '' , component: AccueilComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AnnonceComponent,
    ListAnnoncesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
