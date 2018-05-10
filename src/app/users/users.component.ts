import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  dist:any[];
  db:AngularFireDatabase;
  constructor(db:AngularFireDatabase) {
        db.list('/seller').valueChanges()
        .subscribe(user =>{
          this.dist=user;
          console.log(this.dist)
        })
  }


  removeUser(dist){
      this.db.list('/seller' +dist.$key())
      .remove().then(x=> console.log("deleted"))

}
}
