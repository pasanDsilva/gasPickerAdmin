import { JasperoAlertsModule,AlertsService, AlertType, AlertSettings } from '@jaspero/ng-alerts';
import { Observable } from 'rxjs/Observable';
// import { AgmCoreModule } from '@agm/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { UserService} from './user.service';
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
  // @ViewChild('gmap') gmapElement:any;
  //   map: google.maps.Map;
    lat: number = 6.903955;
  lng: number = 79.85521;

  dist$:Observable<any[]>;
  distref:AngularFireList<any>;
  modalref:AngularFireList<any>
  modal$:Observable<any[]>;
  test:any[];
  db:AngularFireDatabase;
  db1:AngularFireDatabase;
  alertOption = {
   
    overlay: true, 
    overlayClickToClose: true, 
    showCloseButton: true
  }

  constructor(db:AngularFireDatabase,db1:AngularFireDatabase,private modalService: NgbModal,private UserService:UserService,private alertService: AlertsService) {
       this.distref=
       db.list('/profile');
       this.dist$ = this.distref.snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });

        
        
        
        
      }
   
    
        ngOnInit(){

        }


  


  removeUser(key:string){
      this.distref.remove(key);
      this.alertService.create("success","Successfull", "User Deleted Successfully", this.alertOption  )
}



open(content,key:string) {
  this.modalService.open(content,{size:'lg',centered: true},);
  // console.log(key);
    this.loadProfile(key);
}

loadProfile(key:string){

    // const modalref = this.UserService.authenUser(key)
    // console.log(modalref);
    // modalref.subscribe(profile =>{
    //   this.modal$=profile;
    // })
    // console.log(this.modal$);
      console.log(key);
        this.modal$=this.modalref.snapshotChanges().map(diff => {
      return diff.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    
    
  }


}
