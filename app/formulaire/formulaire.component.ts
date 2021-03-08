import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  validationboolean : boolean = true;
  
  constructor() { }

  nom: string = "";
  tel: string = "";
  prenom: string = "";
  adresse: string = "";
  cp: string = "";
  ville: string = "";
  email: string = "";
  civilite: string = "";
  pays: string = "";
  login: string = "";
  mdp: string = "";

  ngOnInit(): void {
  }

  validationtel () : boolean {
    return (/^[0-9]{1,10}$/.test (this.tel));    
  }

  validationnom () : boolean {
    return (/^[A-Z a-z]{1,30}$/.test (this.nom));    
  }
  
  validationprenom () : boolean {
    return (/^[A-Z a-z]{1,30}$/.test (this.prenom));    
  }

  validationadresse () : boolean {
    return (/^[A-Z a-z 0-9 /s]{1,30}$/.test (this.adresse));    
  }

  validationcp () : boolean {
    return (/^[0-9]{1,10}$/.test (this.cp));    
  }

  validationville () : boolean {
    return (/^[A-Z a-z]{1,30}$/.test (this.ville));    
  }

  validationemail () : boolean {
    return (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test (this.email));    
  }

  validationcivilite () : boolean {
    return (/^[A-Z a-z]{1,30}$/.test (this.civilite));    
  }

  validationpays() : boolean {
    return (/^[A-Z a-z]{1,30}$/.test (this.pays));    
  }

  validationlogin() : boolean {
    return (/^[A-Z a-z]{1,30}$/.test (this.login));    
  }

  validationmdp() : boolean {
    return (/^[A-Z a-z]{1,30}$/.test (this.mdp));    
  }

  
}

