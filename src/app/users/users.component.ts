import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public ArrayUsers: any;

  constructor(public userservice: UserService) { }

  ngOnInit(): void {
    this.ArrayUsers = this.userservice.getUsers();
  }

}
