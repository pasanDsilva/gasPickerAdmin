import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { async } from '@angular/core/testing';
import { AngularFireDatabase,AngularFireObject } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
// import { NgbModal}




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  
  seller:any[];
 closeResult: string;

  constructor(db:AngularFireDatabase,private modalService: NgbModal) { 
      db.list('/seller').valueChanges().subscribe(seller =>
        this.seller=seller

      )
      console.log(this.seller);

  }

  add(product:HTMLInputElement){
     
  }
    
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
}
