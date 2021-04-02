import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnnonceService} from '../services/annonce.service';
import {Router} from '@angular/router';
import {Annonce} from '../model/annonce.model';

@Component({
  selector: 'app-new-annonce',
  templateUrl: './new-annonce.component.html',
  styleUrls: ['./new-annonce.component.css']
})
export class NewAnnonceComponent implements OnInit {
  id:number;
  editMode = false;
  annonceForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private annonceService: AnnonceService,
              private router: Router) { }

  ngOnInit(): void {
    console.log("hehe");
    this.annonceService.addAnnonceToServer();
    this.initForm();
  }

  initForm(){
    console.log(this.id);
    this.annonceForm = this.formBuilder.group( {
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  // initForm(){
  //
  //   if (this.editMode){
  //     const annonce = this.annonceService.getAnnonceById(this.id);
  //   }
  // }

  onSubmitForm(){
    if (this.editMode) {
      this.annonceService.updateAnnonce(this.id , this.annonceForm.value)

    } else {
      const formValue = this.annonceForm.value;
        const newAnnonce = new Annonce(
          formValue['title'],
          formValue['content']
        )
        this.annonceService.addAnnonce(newAnnonce);
        this.router.navigate(['/listeAnnonce'])

    }

  }
}
