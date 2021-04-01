import { Injectable } from '@angular/core';
import {Annonce} from '../model/annonce.model';
import * as faker from 'faker';
import {Subject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class AnnonceService {

  private lesAnnonces: Annonce[] = [];

  constructor() {
    faker.setLocale('fr');
    for (let i = 0 ; i < 5 ; i++) {
      const annonce: Annonce = new Annonce();
      annonce.id = i;
      annonce.title = faker.name.firstName();
      annonce.content = faker.lorem.sentences(4)
      this.lesAnnonces.push(annonce);
    }
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
