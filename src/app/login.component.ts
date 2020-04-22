import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'login',
    template: `
    <div class="jumbotron">
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                <h3>Login</h3>
                <form>                
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" [(ngModel)]="loginData.email" class="form-control" [ngModelOptions]="{standalone: true}"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" [(ngModel)]="loginData.password" class="form-control" [ngModelOptions]="{standalone: true}"/>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" (click)='login()'>Login</button>
                </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    `
})
export class LoginComponent{

    constructor(private auth : AuthService){}
    
    loginData = {
        email : '',
        password : ''
    }

    login(){
        this.auth.login(this.loginData);
        //console.log(this.loginData);
    }
        
}