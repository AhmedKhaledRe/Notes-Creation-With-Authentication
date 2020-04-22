import { Component } from "@angular/core";
import { WebService } from "./web.service";


@Component({
    selector: 'user',
    template: `
        <mat-card class="card">
            <mat-card-content>
                <mat-form-field>
                        <input [(ngModel)]="model.firstName" matInput placeholder="First Name">
                </mat-form-field>
                <mat-form-field>
                        <input [(ngModel)]="model.lastName" matInput placeholder="Last Name">
                </mat-form-field>
                <mat-card-actions>
                    <button (click)="post()" mat-raised-button color="primary">Save Changes</button>
                </mat-card-actions>
            </mat-card-content> 
        </mat-card>
    `
})
export class UserComponent{

    constructor(private webService : WebService){}
    
    model ={
        firstName : "",
        lastName : ""
    }

    ngOnInit(){
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.webService.getUser().subscribe(res=>{
            this.model.firstName = res.firstName;
            this.model.lastName = res.lastName;
        });
    }

    post(){
        this.webService.saveUser(this.model).subscribe();
        //this.onPosted.emit(this.model);
    }
}