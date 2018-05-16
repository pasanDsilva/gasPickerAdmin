import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {

  dist:any[];
  db:AngularFireDatabase;
  constructor(db:AngularFireDatabase,private modalService: NgbModal) {
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
open(content) {
  this.modalService.open(content,{size:'lg',centered: true},);
}
}
