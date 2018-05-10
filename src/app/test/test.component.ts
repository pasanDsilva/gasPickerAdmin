import { async } from '@angular/core/testing';
import { AngularFireDatabase,AngularFireObject } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  
  products$;

  constructor(db:AngularFireDatabase) { 
      this.products$= db.object('/products/-LC4mpuBNp4mdivZUWRy').valueChanges();

  }

  add(product:HTMLInputElement){
      this.products$
  }
    
  

}
