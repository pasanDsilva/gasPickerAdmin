import { Router, RouterModule } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  courses: any[];
  constructor(db:AngularFireDatabase) { 
    db.list('/client').valueChanges()
    .subscribe( client =>{
      this.courses=client;
      console.log(this.courses)
    



    })

  }

  ngOnInit() {
  }

}
