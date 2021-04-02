import {Component, OnDestroy, OnInit} from '@angular/core';
import {Annonce} from '../model/annonce.model';
import {AnnonceService} from '../services/annonce.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit, OnDestroy {
  lesAnnonces: Annonce[];
  lesAnnoncesDB: Annonce[];
  annoncesSubscription: Subscription;


  constructor(private annonceService: AnnonceService) {
  }

  ngOnInit(): void {
    this.annoncesSubscription = this.annonceService.annoncesSubject.subscribe(
      (annonces : Annonce[]) => {
        this.lesAnnonces = annonces;
      }
    );
    this.annonceService.emitAnnonces();

    this.annonceService.getAnnonces().subscribe((data: any) => {
      this.lesAnnoncesDB = data['hydra:member'];
      console.log(data['hydra:member']);
      console.log(this.lesAnnoncesDB);
    });
  }
  getAnnonces() {
    this.lesAnnonces = this.annonceService.getLesAnnonces();
  }

  ngOnDestroy(): void {
    this.annoncesSubscription.unsubscribe();
  }

  deleteAnnonce(annonce: Annonce) {

     this.annonceService.deleteAnnonce(annonce);
     this.lesAnnonces = this.annonceService.getLesAnnonces();
  }
}
