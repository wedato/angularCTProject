import { Component, OnInit } from '@angular/core';
import {Annonce} from '../model/annonce.model';
import {AnnonceService} from '../services/annonce.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css']
})
export class ListAnnoncesComponent implements OnInit {
  lesAnnonces: Annonce[];


  constructor(private annonceService: AnnonceService) {
  }

  ngOnInit(): void {
    this.getAnnonces();
  }
  getAnnonces() {
    this.lesAnnonces = this.annonceService.getLesAnnonces();
  }
}
