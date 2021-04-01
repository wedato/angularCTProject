import { Component, OnInit } from '@angular/core';
import {Annonce} from '../model/annonce.model';
import {AnnonceService} from '../services/annonce.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-annonce',
  templateUrl: './edit-annonce.component.html',
  styleUrls: ['./edit-annonce.component.css']
})
export class EditAnnonceComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

}
