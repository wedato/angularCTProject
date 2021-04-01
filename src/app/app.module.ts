import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AnnonceComponent } from './annonce/annonce.component';
import {RouterModule} from '@angular/router';


// @ts-ignore
const appRoutes: Route =  [
  { path: 'annonce' , component : AnnonceComponent},
  { path: '' , component: AccueilComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AnnonceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
