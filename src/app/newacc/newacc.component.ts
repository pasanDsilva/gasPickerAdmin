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

  addForm= {username:'',email:'',password:'',cpassword:''}
  alertOption = {
   
    overlay: true, 
    overlayClickToClose: true, 
    showCloseButton: true
  }
  
  
  
  constructor(private NewaccService:NewaccService,private Router:Router,private alertService: AlertsService) { 

  }

  
  addAcc () {
    
    console.log(this.addForm);
    
    if (this.addForm.email=='' || this.addForm.password=='' || this.addForm.username==''){
      this.alertService.create("error","Error", "Some fields maybe empty", this.alertOption  )
    }
      else{
        
        if(this.addForm.password != this.addForm.cpassword){
          this.alertService.create("error","Error", "Passwords dont match", this.alertOption  )
        }
        else{
          const user = this.NewaccService.addAcc(this.addForm)
          console.log("user", user)
        this.alertService.create("success","Successfull", "User succesfully added", this.alertOption  )
        }
        
      }
    
  }
}
