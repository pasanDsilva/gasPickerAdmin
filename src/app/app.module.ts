import { ProductsService } from './products/products.service';
import { UserService } from './users/user.service';
import { NewaccService } from './newacc/newacc.service';
import { SignService } from './sign/sign.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import {JasperoAlertsModule} from '@jaspero/ng-alerts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {
  AngularFireDatabase,
  FirebaseObjectObservable,
  FirebaseListObservable
} from 'angularfire2/database-deprecated';




import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireDatabaseModule} from 'angularfire2/database-deprecated';

import { firebaseConfig } from '../environments/firebase.config';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignComponent } from './sign/sign.component';
import { MainComponent } from './main/main.component';
import { LoginService } from './login/login.service';
import { NewaccComponent } from './newacc/newacc.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    MainComponent,
    NewaccComponent,
    UsersComponent,
    ProductsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    JasperoAlertsModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path:'', component : LoginComponent},
      { path:'signup', component : SignComponent},
      { path:'main',component:MainComponent},
      { path: 'newacc',component:NewaccComponent},
      { path: 'users',component:UsersComponent},
      { path: 'products', component:ProductsComponent},
      { path: 'test', component:TestComponent}
    ]),
    
  ],
  providers: [SignService, LoginService,NewaccService,UserService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
