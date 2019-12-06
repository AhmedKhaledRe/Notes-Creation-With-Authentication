import { Injectable } from "@angular/core";
import { Http ,Headers,RequestOptions} from "@angular/http";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthService{

    BASE_URL: string = environment.BASE_URL_AUTH;

    NAME_KEY = 'name';
    TOKEN_KEY = 'token';

    constructor(private http : Http ,private router : Router){}

    get name(){
        return localStorage.getItem(this.NAME_KEY);
    }

    get isAuthenticated(){
        return !! localStorage.getItem(this.TOKEN_KEY);
    }

    register(user){
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe(
            res =>
            {
                this.authenticate(res);
            }
        );
    }

    login(loginData){
        this.http.post(this.BASE_URL + '/login', loginData).subscribe(
            res=>{
                this.authenticate(res);
                //console.log(res.json());
            }
        );
    }

    get tokenHeaders(){
        var header = new Headers({'Authorization':'Bearer '+ localStorage.getItem(this.TOKEN_KEY)});
        return new RequestOptions({headers:header});
    }

    authenticate(res){
        var authResponse = res.json();

        if(!authResponse.token)
            return;

        localStorage.setItem(this.TOKEN_KEY , res.json().token)
        localStorage.setItem(this.NAME_KEY , res.json().firstName)

        this.router.navigate(['/']);

    }




        logout() {
            //this.user = null;
            localStorage.removeItem(this.NAME_KEY);
            localStorage.removeItem(this.TOKEN_KEY);
            this.router.navigate(['/']);
        }
     }
