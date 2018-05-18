import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild,ElementRef} from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('gmap') gmapElement:any;
    map: google.maps.Map;

  dist:any[];
  db:AngularFireDatabase;
  constructor(db:AngularFireDatabase,private modalService: NgbModal) {
        db.list('/seller').valueChanges()
        .subscribe(user =>{
          this.dist=user;
          console.log(this.dist)
        });
        
        
      }
      ngOnInit() {
        var mapProp = {
          center: new google.maps.LatLng(18.5793, 73.8143),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        console.log("this was called");
        console.log(mapProp);
      }
   
    
        
  

  


  removeUser(dist){
      this.db.list('/seller' +dist.$key())
      .remove().then(x=> console.log("deleted"))

}
open(content) {
  this.modalService.open(content,{size:'lg',centered: true,windowClass: 'dark-modal'},);
  
}
}
