import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
// import { Observable } from '@firebase/util';
import { Observable} from 'rxjs/observable';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent  {
    db:AngularFireDatabase;
    feedref:AngularFireList<any>;
    feedback$:Observable<any[]>;
  constructor(db:AngularFireDatabase) {

    this.feedref=db.list('/feedbackDetails');
    this.feedback$=this.feedref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });


   }


   removeMessage(key:string){
      this.feedref.remove(key);
   }

  

}
