import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';



export class newProductTemp{
  brand='Brand name'
  size='Size'
  price='price'
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
