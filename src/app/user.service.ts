import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public users = [
    {
      "name":"Jorge",
      "lastname":"Montez"
    },
    {
      "name":"Sam",
      "lastname":"Terrazas"
    },
    {
      "name":"Arthur",
      "lastname":"Gonzales"
    }
  ]

  getUsers(){
    return this.users;
  }
}
