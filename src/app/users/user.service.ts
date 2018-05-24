import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  getDist(key){
    const dist:any =this.db.list("/profile"+key);
    // console.log(dist);
    console.log(this.db.object('/profile/'+key))
    return this.db.object('/profile/' +key);
  }

  authenUser(key){
    const user:any = this.db.list("/profile"+key).valueChanges();
    return user;
  }
  

}
    

