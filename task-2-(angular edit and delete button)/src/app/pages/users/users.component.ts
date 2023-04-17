import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users :any = []
  handleUser(eve:any){
    // console.log(eve)
    this.users.push(eve)
  }
  deleteUser(i: any) {
    this.users.splice(i,1)
   }

  editUser(eve: any) {
    this.users[eve].userName = prompt("Edit your name");
    this.users[eve].email = prompt("Edit your email");
  }
}
