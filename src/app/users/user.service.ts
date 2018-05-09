import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  getDist(){
    const dist:any =this.db.list("/user",ref => ref.orderByChild('name')).valueChanges();
    return dist;
  }
    
}
