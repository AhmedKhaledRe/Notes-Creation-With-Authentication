import { Http} from '@angular//http';
import {Injectable} from '@angular/core'
import {  MatSnackBar } from "@angular/material";
import { Subject } from "rxjs";
import { AuthService } from "./auth.service";
import { map } from 'rxjs/operators';


@Injectable()
export class WebService{

    BASE_URL = 'http://localhost:3000/api'

    private messageStore = [];

    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    constructor(private http: Http , private sb : MatSnackBar ,private auth : AuthService) {
        this.getMessages(null);
    }

    getMessages(user){
            user = (user) ? '/' + user : '' ;
            this.http.get(this.BASE_URL + '/messages'+ user).subscribe(response => {
                this.messageStore = response.json();
                this.messageSubject.next(this.messageStore);
            },error =>{
                //this.handleError("unable to get messages");
            });
    }

    /*async getMessages(user){
        try {
            user = (user) ? '/' + user : '' ;
            var response = await this.http.get(this.BASE_URL + '/messages'+ user).toPromise();
            this.messages = response.json();
        } catch (error) {
            this.handleError("unable to get messages");
        }
    }*/




    async postMessage(message){
        try {
            var response = await this.http.post(this.BASE_URL + '/messages',message).toPromise();
            this.messageStore.push(response.json());
        } catch (error) {
            //this.handleError("unable to post messages");
        }
    }

    getUser(){
        return this.http.get(this.BASE_URL+ '/users/me',this.auth.tokenHeaders).pipe(map(res => res.json()));
    }

    saveUser(userData){
        return this.http.post(this.BASE_URL+ '/users/me',userData,this.auth.tokenHeaders).pipe(map(res => res.json()));
    }

    /*getUser(){
        return this.http.get(this.BASE_URL+ '/users/me').subscribe(res => {
            res.json();
        });
    }*/

    /*async postMessage(message){
        var response = await this.http.post(this.BASE_URL + '/messages',message).subscribe(response => {
        this.messageStore.push(response.json());
        this.messageSubject.next(this.messageStore);
    },error =>{
        this.handleError("unable to post messages");
    });
}*/


    /*private handleError(error){
        this.sb.open(error,'close',{duration : 4000});
    }*/

}
