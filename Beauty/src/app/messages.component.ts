import { Component } from "@angular/core";
import { WebService } from "./web.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let message of webService.messages | async">
        <mat-card class="card">
            <mat-card-title [routerLink]="['/messages',message.owner]" style="cursor:pointer"> {{message.owner}} </mat-card-title>
            <mat-card-content> {{message.text}} </mat-card-content>
        </mat-card>
    </div>
    `
})
export class messegesComponent{

    //messages;

    constructor(public webService : WebService , private route : ActivatedRoute){}

    ngOnInit(){
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
        this.webService.getUser().subscribe();
    }

    /*ngOnInit(){
        var name = this.route.snapshot.params.name;
        this.webService.getMessages(name);
        this.webService.messages.subscribe(messages => {this.messages=messages});
    }*/

    /*async ngOnInit(){
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        var response =await (this.webService.getMessages());
        this.messages = response.json();
    }

    messages = [];//{text: 'some text', owner: 'Ahmed Khaled' }, { text: 'other',owner: 'Crouch'}
    */
}
