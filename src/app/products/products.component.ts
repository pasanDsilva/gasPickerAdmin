import { Observable } from 'rxjs/Observable';
import { ProductsService } from './products.service';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { JasperoAlertsModule } from '@jaspero/ng-alerts';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng-alerts';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {

  products:Observable<any[]>;
  // p$:AngularFireObject<any[]>;
  db:AngularFireDatabase;
  addPro={brand:'',size:'',price:''}
  rePro={brand:''}
  alertOption = {
   
    overlay: true, 
    overlayClickToClose: true, 
    showCloseButton: true
  }
  

  constructor(db:AngularFireDatabase,private db1:AngularFireDatabase,private ProductsService:ProductsService,private alertService: AlertsService) {
     
    this.products=db.list('/products/').valueChanges()
     console.log(this.products);
    
      
     

    
   }
              
  addProduct(){
      console.log(this.addPro);
      const products= this.ProductsService.addProduct(this.addPro)
      this.alertService.create("success","Successfull", "Products succesfully added", this.alertOption  )
      
    }
  
  removeProduct(){
      this.db.object('/products/-LC4mpuBNp4mdivZUWRy')
      .remove()
      .then(x => console.log("deleted"));
    } 
}
