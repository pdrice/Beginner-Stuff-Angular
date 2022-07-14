import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  // Services
  getAllUsers(){
    return[
      {id:101, name:'john', city:'DELHI', salary:2, dob:new Date('05/10/1989')},
      {id:101, name:'peter', city:'PUNE', salary:80000, dob:new Date('05/12/1985')},
      {id:101, name:'omed', city:'GOA', salary:190000, dob:new Date('10/10/1991')},
      {id:101, name:'kunel', city:'DELHI', salary:55000, dob:new Date('12/18/1987')},
    ]
  }

  // Http Services
  getAllUsers2(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
    
  }
}
