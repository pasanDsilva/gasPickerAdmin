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

  products:any[];
  p$:AngularFireList<any[]>;
  db:AngularFireDatabase;
  addPro={brand:'',size:'',price:''}
  rePro={brand:''}
  alertOption = {
   
    overlay: true, 
    overlayClickToClose: true, 
    showCloseButton: true
  }
  

  constructor(db:AngularFireDatabase,private ProductsService:ProductsService,private alertService: AlertsService) {
    db.list('/products').valueChanges().subscribe(products =>{
      this.products=products;
      console.log(this.products);
    })
     
    

    
   }
              
  addProduct(){
      console.log(this.addPro);
      const products= this.ProductsService.addProduct(this.addPro)
      this.alertService.create("success","Successfull", "Products succesfully added", this.alertOption  )
      
    }
  
  removeProduct(products){
      this.db.list('/products/' +products.$key)
      .remove(products)
      .then(x => console.log("deleted"));
    } 
}
