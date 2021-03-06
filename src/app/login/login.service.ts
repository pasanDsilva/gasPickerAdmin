import { AngularFireDatabase, AngularFireObject, AngularFireAction, AngularFireList} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { EmailAuthProvider } from '@firebase/auth-types';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {


  constructor(private db:AngularFireDatabase) { }

  authenticateUser(obj){
    console.log("dsa", obj)
    // const queryObservable = this.db.list("/user", 
    //    ref => ref.orderByChild('email').equalTo('Test@123')
    // )..subscribe(data => console.log(data))
const responseObj = {
  error:true,
  message:''
}
    const user:any = this.db.list("/user",ref => ref.orderByChild('username').equalTo(obj.username) ).valueChanges();
    return user;
  }

}
