export class Annonce {


   id: Number;
   static idstatic = 0;


  constructor( public title: string ,  public content: string ) {
    this.id = Annonce.idstatic++;
  }
}
