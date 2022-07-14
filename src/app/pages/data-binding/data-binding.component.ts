import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  //Interpolation 
  pageTitle:string = "Data Binding in Angular"
  imageUrl:string ='assets/images/cat.jpeg';

  //Property Binding
  btnStatus:boolean=false;

  // Two way Binding
  username:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

changeTitle(){
  this.pageTitle ='Data Binding'
}

}
