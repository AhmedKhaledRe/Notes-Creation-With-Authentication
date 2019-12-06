import { Component } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
    selector: 'nav',
    template: `
        <mat-toolbar color="primary">
        <div><span><button mat-button routerLink="/" >Home</button></span></div>
        <div *ngIf="auth.isAuthenticated"><span><button mat-button routerLink="/" >New Message</button></span></div>
        <div *ngIf="auth.isAuthenticated"><span><button mat-button routerLink="/messages">Messages</button></span></div>
        <span style="flex : 1 1 auto"></span>
        <div>
        <span><button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button></span>
        <span><button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button></span>
        <span><button *ngIf="auth.isAuthenticated" mat-button routerLink="/user">Welcome {{auth.name}}</button></span>
        <span><button *ngIf="auth.isAuthenticated" mat-button (click)='auth.logout()' routerLink="/login">LogOut</button></span>
        </div>
        </mat-toolbar>
    `
})
export class NavComponent{

    constructor(public auth : AuthService){

    }

}
