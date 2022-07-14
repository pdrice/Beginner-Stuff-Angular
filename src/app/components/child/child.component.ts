import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

// This allows parent variable username to be passed to child
 @Input() username:string;

// This allows child component to communicate with parent component
 @Output() notify:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  passData(){
    this.notify.emit('This message is coming from Child component')
  }

}
