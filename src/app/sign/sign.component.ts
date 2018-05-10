import { Router,} from '@angular/router';
import { RouterModule } from '@angular/router';
import { SignService,Signtemp } from './sign.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../core/auth.service";
import { ValidationPath } from '@firebase/database/dist/esm/src/core/util/Path';
import { User} from './user.interface';
import { buildDriverProvider } from 'protractor/built/driverProviders';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng-alerts';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {


  sign: any;
  sForm: FormGroup;
  regForm = {username:'', email:'',password:'' }
  alertOption = {
   
    overlay: true, 
    overlayClickToClose: true, 
    showCloseButton: true
  }




 constructor(private signService:SignService ,private fb:FormBuilder, private alertService: AlertsService,private router: Router){

    
  
 }

 log(x,y,z){ console.log(x,y,z)

 } 
  createNewAcc(username,email,password){
    this.sign=this.signService.createAcc({username, email, password});
    this.buildForm()
    
  }
    
  
  saveAcc(){
    const data=this.sForm.value
   const  user = this.signService.updateAcc(this.sign, data);
   
  }

  handleSubmit () {
    
    console.log(this.regForm);
    const user = this.signService.createAcc(this.regForm)
    console.log("user", user)
    // alert("User succesfully added")
    this.alertService.create("success","Successfull", "User succesfully added", this.alertOption  )
  }
  
  btnclick(){
     this.router.navigateByUrl('');
  }


  private buildForm() {

  
    this.sForm= this.fb.group({
      username: ['',[Validators.required]],
      email: ['',Validators.required],
      password: ['',Validators.required]
  
    });

    this.sign.subscribe(sign => {
        this.sForm.patchValue(sign)
    })


  
  }
  
 

  }











 