import { Component } from "@angular/core";
import { WebService } from "./web.service";
import { AuthService  } from "./auth.service";

@Component({
    selector: 'new-messages',
    template: `
        <mat-card class="card" *ngIf="message.owner">
            <mat-card-content >
                <mat-form-field>
                        <textarea  [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
                </mat-form-field>
                <mat-card-actions>
                    <button (click)="post()" *ngIf="message.text" mat-raised-button color="primary" [routerLink]="['/messages',message.owner]">POST</button>
                </mat-card-actions>
            </mat-card-content> 
        </mat-card>
    `
})
export class NewMessegesComponent{

    //@Output() onPosted = new EventEmitter();

    constructor(private webService : WebService, private auth : AuthService){}
    
    message ={
        owner : this.auth.name,
        text : ""
    }

    post(){
        this.webService.postMessage(this.message);
        //this.onPosted.emit(this.message);
    }
}