import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {

   title = 'titre de base';
   content = 'content de base';




  constructor() { }

  ngOnInit(): void {
  }


  geTitle(): string {
    return this.title;
  }

  getContent(): string {
    return this.content;
  }

  editAnnonce(f) {

  }
}
