import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { EmailAuthProvider } from '@firebase/auth-types';


export class Signtemp{
    username='Your User name'
    email='Your email'
    password='your password'
}


@Injectable()
export class SignService {

  constructor(private db:AngularFireDatabase) { }

// Passing user Object from the sign component
  createAcc(userObj :Object):AngularFireObject<Signtemp>{
      console.log("userObj ",userObj);
      const signKey=this.db.list('/user').push(userObj).key;
      console.log(this.db.object('/user/' + signKey));
      return this.db.object('/user/' +signKey);

  }

  updateAcc(ad :AngularFireObject<Signtemp>,data:any){
    
    return ad.update(data)

  }

    

  
}

