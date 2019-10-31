import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { messegesComponent } from "./messages.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatCardModule,MatInputModule,MatSnackBarModule,MatToolbarModule,MatCommonModule,MatFormFieldModule} from '@angular/material'
import { WebService } from "./web.service";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { NewMessegesComponent } from './new-message.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from "./nav.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { RegisterComponent } from "./register.component";
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login.component";
import { UserComponent } from "./user.component";
import { routes } from "./routes.component";
import { JwtModule } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent,messegesComponent,UserComponent,LoginComponent,NewMessegesComponent,NavComponent,HomeComponent,RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule, 
    MatSnackBarModule,
    MatToolbarModule,
    MatCommonModule,
    MatFormFieldModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes,{ enableTracing: true }), // <-- debugging purposes only)
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
              console.log(localStorage.getItem('token'));
             return     localStorage.getItem('token');},
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['localhost:4200/user']
      }
    })
  ],
  providers: [WebService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
