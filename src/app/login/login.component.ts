import { Router } from '@angular/router';
import { SignService } from './../sign/sign.service';
// import { AlertsService } from '@jaspero/ng-alerts';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { LoginService } from './login.service';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng-alerts';
import { empty } from 'rxjs/Observer';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  
  logform={username: '',password: ''};
  alertOption = {
   
    overlay: true, 
    overlayClickToClose: true, 
    showCloseButton: true
  }

  constructor(private loginService:LoginService , private alertService: AlertsService,private router: Router){

  }

  

  btnmain(){
    this.router.navigateByUrl('main')
  }
  btnlog(){
    this.router.navigateByUrl('/signup');
  }  

  handleSubmit () {
    
    console.log(this.logform);
    const user = this.loginService.authenticateUser(this.logform);

    console.log(user);
    user.subscribe(data => {
      console.log(data)

      if(data.length > 0){ 
        const userObj = data[0];
        if(userObj.password === this.logform.password){
          console.log("Password match")
          this.btnmain()
          return {error:false, message: "Success"}
        }
        else{
          
          this.alertService.create("error","Error", "Password does not match", this.alertOption  )
          
        }
       
      }
      else{
        console.log("User does not exist")
        
        this.alertService.create("error","Error", "User does not exist", this.alertOption  )

       }
        
      
    })
  

 }

}
