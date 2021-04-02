import { Injectable } from '@angular/core';
// @ts-ignore
import {Annonce} from '../model/annonce.model';
import * as faker from 'faker';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface Annonce {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class AnnonceService {

  private lesAnnonces: Annonce[] = [];
  annoncesSubject = new Subject<Annonce[]>();


  constructor(private http: HttpClient) {
    faker.setLocale('fr');
    for (let i = 0 ; i < 5 ; i++) {
      const annonce: Annonce = new Annonce(
        faker.name.firstName() ,
        faker.lorem.sentences(4) );

      this.lesAnnonces.push(annonce);
    }
  }



  emitAnnonces(){
    this.annoncesSubject.next(this.lesAnnonces.slice());
  }
  addAnnonce(annonce: Annonce){
    this.lesAnnonces.push(annonce);
    this.emitAnnonces();
  }

  deleteAnnonce(annonce: Annonce){

    this.lesAnnonces = this.lesAnnonces.filter(a => a.id !== annonce.id );

  }
  updateAnnonce(index: number, newAnnonce: Annonce) {
    this.lesAnnonces[index] = newAnnonce;
    this.annoncesSubject.next(this.lesAnnonces.slice());
  }


// tslint:disable-next-line:typedef
  getAnnonces(){
    return this.http.get('https://localhost:8000/api/annonces')
  }


  public getLesAnnonces(): Annonce[] {
    return this.lesAnnonces;
  }


  public getAnnonceById(id:number): Annonce | undefined {
    return this.lesAnnonces.find(a => a.id === id)
  }


  // createAnnonce(annonce){
  //   this.annonces = [annonce, ...this.annonces]
  // }
}
