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
import { EditAnnonceComponent } from './edit-annonce/edit-annonce.component';
import { DetailAnnonceComponent } from './detail-annonce/detail-annonce.component';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

import { HeaderComponent } from './header/header.component';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';






const route: Routes =  [
  { path: 'annonce' , canActivate: [AuthGuardService], component : AnnonceComponent},
  { path: 'auth/signin' , component : SigninComponent},
  { path: 'auth/signup' , component : SignupComponent},
  {path: 'listeAnnonce', canActivate: [AuthGuardService] , component: ListAnnoncesComponent},
  {path: 'newAnnonce' ,component: NewAnnonceComponent , canActivate: [AuthGuardService]},
  {path: 'editAnnonce/:id', component: EditAnnonceComponent, canActivate: [AuthGuardService]},
  { path: '' , redirectTo: 'listeAnnonce', pathMatch: 'full'},
  { path: '**' , redirectTo: 'listeAnnonce'},
];

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AnnonceComponent,
    ListAnnoncesComponent,
    NewAnnonceComponent,
    EditAnnonceComponent,
    DetailAnnonceComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AnnonceService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
