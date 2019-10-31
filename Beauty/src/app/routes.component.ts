import { LoginComponent } from "./login.component";
import { UserComponent } from "./user.component";
import { AppComponent } from './app.component';
import { messegesComponent } from "./messages.component";
import { HomeComponent } from "./home.component";
import { RegisterComponent } from "./register.component";
import { NewMessegesComponent } from './new-message.component';



export var routes = [
    {
    path : '',
    component : HomeComponent
    },
    {
    path : 'messages',
    component : messegesComponent,
    },
    {
    path : 'messages/:name',
    component : messegesComponent,
    },
    {
      path : 'register',
      component : RegisterComponent
    },
    {
      path : 'login',
      component : LoginComponent
    },
    {
      path : 'user',
      component : UserComponent,
    },
    { path: '**', 
      redirectTo: '/', pathMatch: 'full' 
    }
  ];




