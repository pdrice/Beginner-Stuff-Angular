import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  // username is being passed down to child component named ChildComponent
  username:string='John Smith';
  
  childData:string;
  constructor() { }

  ngOnInit(): void {
  }

  // This method is getting the data from the child component
 parentMethod(data){
  this.childData = data
 }
}
