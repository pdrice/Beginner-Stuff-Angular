import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  pageTitle:string= 'Services in Angular';

  users:any;
  // users2:any;
  
  errorMessage:string='Loading...'
  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  //  local service
    // this.users = this.userService.getAllUsers();
  // http service
    this.userService.getAllUsers2().subscribe((data)=>{
      this.users = data
    }), (err:any)=>{
      this.errorMessage = 'Some internal issues while making API call'
    }
  }

}
