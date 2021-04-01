import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AnnonceComponent } from './annonce/annonce.component';
import {RouterModule , Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListAnnoncesComponent } from './list-annonces/list-annonces.component';
import {AnnonceService} from './services/annonce.service';
import { NewAnnonceComponent } from './new-annonce/new-annonce.component';





const route: Routes =  [
  { path: 'annonce' , component : AnnonceComponent},
  {path: 'listeAnnonce' , component: ListAnnoncesComponent},
  {path: 'newAnnonce' ,component: NewAnnonceComponent },
  { path: '' , component: AccueilComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AnnonceComponent,
    ListAnnoncesComponent,
    NewAnnonceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AnnonceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
