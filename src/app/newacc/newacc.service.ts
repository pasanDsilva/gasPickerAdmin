import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';







export class newAccTemp{
    username='Your User name'
    email='Your email'
    password='your password'
}

@Injectable()
export class NewaccService {

  constructor(private db: AngularFireDatabase) { }


    addAcc(userObj:Object):AngularFireObject<newAccTemp>{
      console.log("userObj",userObj);
      const signKey=this.db.list('/user').push(userObj).key;
      console.log(this.db.object('/user/' + signKey));
      return this.db.object('/user/' +signKey);
    }


}
