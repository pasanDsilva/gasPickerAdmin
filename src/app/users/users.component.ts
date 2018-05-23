// import { AgmCoreModule } from '@agm/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild,ElementRef} from '@angular/core';
// import { AgmCoreModule}
import { } from '@types/googlemaps';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // @ViewChild('gmap') gmapElement:any;
  //   map: google.maps.Map;
    lat: number = 6.903955;
  lng: number = 79.85521;

  dist$;
  db:AngularFireDatabase;
  constructor(db:AngularFireDatabase,private modalService: NgbModal) {
       this.dist$=
       db.list('/profile').snapshotChanges()
      .map(changes =>{
        return changes.map(c =>({
          key:c.payload.key,
          ...c.payload.val(),
        }))
      })
        let s=this.dist$;
          console.log(this.dist$);
        
        
        
      }
   
    
        ngOnInit(){


          // let mapProp = {
          //   center: new google.maps.LatLng(18.5793, 73.8143),
          //   zoom: 15,
          //   mapTypeId: google.maps.MapTypeId.ROADMAP
          // };
          // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
          // console.log("this was called");
          // console.log(mapProp);
        }


  


  removeUser(dist$){
      this.db.list('/profile' + dist$.$key)
      .remove().then(x=> console.log("deleted"))

}



open(dist) {
  this.modalService.open(dist,{size:'lg',centered: true},);
  console.log(dist);
}

}
