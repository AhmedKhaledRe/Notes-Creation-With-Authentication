import { Component } from '@angular/core';
import { messegesComponent } from "./messages.component";
import { NewMessegesComponent } from "./new-message.component";
import { NavComponent } from "./nav.component";
import { AuthService } from "./auth.service";

@Component({
  selector: 'home',
  template: `
    <div *ngIf="!auth.isAuthenticated">
      <login></login>
    </div>
    <div *ngIf="!!auth.isAuthenticated">
      <new-messages ></new-messages>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {

  constructor(public auth : AuthService){}

}
