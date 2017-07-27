import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from '../app.settings';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    // store the URL so we can redirect after logging in
    public redirectUrl: string;

    constructor(
        private http: Http,
        private router: Router
    ) { }

    login(loginForm) {

        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        return this.http.post(AppSettings.API_URL + "/token",
            "UserName=" + encodeURIComponent(loginForm.userName) +
            "&Password=" + encodeURIComponent(loginForm.password) +
            "&grant_type=password",
            options
        ).
            map((res: Response) => res.json());
    }

    logout() {
        this.isLoggedIn = false;
    }
}