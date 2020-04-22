import { Component } from '@angular/core';
import { NavComponent } from "./nav.component";

@Component({
  selector: 'app-root',
  template: `
    <nav></nav>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*@ViewChild(messegesComponent,{static: false}) messages : messegesComponent;

  onPosted(message){
    this.messages.messages.push(message);
  }*/
  //(onPosted)="onPosted($event)"
}
