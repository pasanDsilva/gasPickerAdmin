import { Observable } from 'rxjs/Observable';
import { ProductsService } from './products.service';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase,AngularFireObject,AngularFireList} from'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { JasperoAlertsModule } from '@jaspero/ng-alerts';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng-alerts';
import { and } from '@angular/router/src/utils/collection';
// import { $ } from 'protractor';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products:any[];
  test$;
  // p$:AngularFireObject<any[]>;
  db:AngularFireDatabase;
  test:string[];
  test1:string[];
  // pasan1:any= this.test1.concat(this.test1); 


  addPro={brand:'',size:'',price:'',BrandSize:''}
  // test=this.addPro.price+this.addPro.size;
  alertOption = {
   
    overlay: true, 
    overlayClickToClose: true, 
    showCloseButton: true
  }
  

  constructor(db:AngularFireDatabase,private db1:AngularFireDatabase,private ProductsService:ProductsService,private alertService: AlertsService) {
     
     db.list('/products').valueChanges().subscribe(products =>
      this.products=products

     );

      // db.object('/products').subscribe(test$ =>
      //   this.test$=test$

      // )
     console.log(this.test$);

    
    
      
     

    
   }
              
  addProduct(){
     
      
      // console.log(this.test);
      // console.log(this.pasan);
      console.log(this.addPro);
      const products= this.ProductsService.addProduct(this.addPro)
      this.alertService.create("success","Successfull", "Products succesfully added", this.alertOption  )
      
    }
  
  removeProduct(products){
      this.db.object('/products/' + products.$key)
      .remove()
      .then(x => console.log("deleted"));
    } 
}
