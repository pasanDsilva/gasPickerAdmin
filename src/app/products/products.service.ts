// import { FirebaseListObservable,AngularFireDatabase } from 'angularfire2/database-deprecated';
import {  AngularFireObject,AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';



export class newProductTemp{
  brand='Brand name'
  size='Size'
  price='price'
  brandSize='Brand and Size'
}

@Injectable()
export class ProductsService {

  constructor(private db:AngularFireDatabase) { }
      
  addProduct(userObj:Object):AngularFireObject<newProductTemp>{
      console.log("userObj",userObj);
      const signKey=this.db.list('/products').push(userObj).key;
      return this.db.object('/products' +signKey);
  }

  removeProduct(brand){

      this.db.list('/products/' +brand).remove();
      return this.db.object('/products');

  }

}
