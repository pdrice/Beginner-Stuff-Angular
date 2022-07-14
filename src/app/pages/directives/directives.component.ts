import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  // ngFor Directive
  // Simple Array
  users:string[] =[
    'John', 'Peter', 'Omed']
  // Object Array
  users2:any[]=[
    {id:1, name:'John', city:'Delaware'},
    {id:2, name:'Peter', city:'Miami'},
    {id:3, name:'Omed', city:'Springs'},
  ]

  // ngIf Directive
  isUserLoggedIn:boolean=false;

  //ngSwitch Directive 
  selectedCountry:string='';
  countries:any[]=[
    {code:'ind', country:'India'},
    {code:'uae', country:'United Arab Emirates'},
    {code:'uk', country:'United Kingdom'},
    {code:'usa', country:'United States of America'},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  choice(event:Event){
  this.selectedCountry = ((event.target as HTMLInputElement).value);
  }
}
