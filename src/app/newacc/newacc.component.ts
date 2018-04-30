import { JasperoAlertsModule } from '@jaspero/ng-alerts';
import { Router } from '@angular/router';
import { NewaccService } from './newacc.service';
import { Component, OnInit } from '@angular/core';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng-alerts';


@Component({
  selector: 'app-newacc',
  templateUrl: './newacc.component.html',
  styleUrls: ['./newacc.component.css']
})
export class NewaccComponent  {

  addForm= {username:'',email:'',password:''}
  alertOption = {
   
    overlay: true, 
    overlayClickToClose: true, 
    showCloseButton: true
  }
  
  
  
  constructor(private NewaccService:NewaccService,private Router:Router,private alertService: AlertsService) { 

  }

  
  addAcc () {
    
    console.log(this.addForm);
    const user = this.NewaccService.addAcc(this.addForm)
    console.log("user", user)
    // alert("User succesfully added")
    this.alertService.create("success","Successfull", "User succesfully added", this.alertOption  )
  }
}
