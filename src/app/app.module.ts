import { SignService } from './sign/sign.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import {JasperoAlertsModule} from '@jaspero/ng-alerts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { firebaseConfig } from '../environments/firebase.config';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignComponent } from './sign/sign.component';
import { MainComponent } from './main/main.component';
import { LoginService } from './login/login.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    JasperoAlertsModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'', component : LoginComponent},
      { path:'signup', component : SignComponent},
      { path:'main',component:MainComponent}
      
    ]),
    
  ],
  providers: [SignService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
