import {Component, Input, OnInit,EventEmitter, Output} from '@angular/core';
import {Annonce} from '../model/annonce.model';
import {ActivatedRoute, Route, Router} from '@angular/router';



@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})
export class DetailAnnonceComponent implements OnInit {
@Input() annonce : Annonce;
@Output() deleteAnnonce = new EventEmitter<Annonce>();

  constructor(private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  delete(annonce: Annonce) {
    this.deleteAnnonce.emit(annonce);
  }


  edit(id) {
    console.log(id);
  }

  onEdit() {
    this.router.navigate(['newAnnonce'])
  }
}
