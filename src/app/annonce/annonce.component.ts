import {Component, Input, OnInit} from '@angular/core';
import {AnnonceService} from '../services/annonce.service';
import {Annonce} from '../model/annonce.model';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

   titleBase = 'titre de base';
   contentBase = 'content de base';

   annonce: Annonce;




  constructor(private annonceService : AnnonceService) { }

  ngOnInit(): void {
  }


  geTitleBase(): string {
    return this.titleBase;
  }

  getContent(): string {
    return this.contentBase;
  }

  editAnnonce(f) {

  }
}
