import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  
  @Input () nom : string ="";
  @Input () prenom : string ="";
  @Input () adresse : string ="";
  @Input () cp : string ="";
  @Input () ville : string ="";
  @Input () tel : string ="";
  @Input () email : string ="";
  @Input () civilite : string ="";
  @Input () mdp : string ="";
  @Input () confirmationmdp : string ="";
  @Input () login : string ="";
  @Input () pays : string ="";


  constructor() { }

  ngOnInit(): void {
  }

}
