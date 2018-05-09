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

  constructor(db:AngularFireDatabase) {
        db.list('/seller').valueChanges()
        .subscribe(user =>{
          this.dist=user;
          console.log(this.dist)
        })
  }


}
