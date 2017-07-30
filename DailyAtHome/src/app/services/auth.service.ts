import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { AppSettings } from '../app.settings';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

    private authSource = new BehaviorSubject<boolean>(this.isLoggedIn());
    authstatus = this.authSource.asObservable();
    updateAuthStatus() {
        this.authSource.next(this.isLoggedIn());
    }
    isLoggedIn(): boolean {
        if (sessionStorage.getItem('accessToken')) return true;
        else return false;
    }
    // store the URL so we can redirect after logging in
    public redirectUrl: string;

    constructor(
        private http: Http,
        private router: Router
    ) { }

    login(loginForm) {
        return this.http.post(AppSettings.API_URL + "/token",
            "UserName=" + encodeURIComponent(loginForm.userName) +
            "&Password=" + encodeURIComponent(loginForm.password) +
            "&grant_type=password"
        ).
            map((res: Response) => res.json());
    }

    register(registerForm) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        // headers.append();
        let options = new RequestOptions({ headers: headers });
        return this.http.post(AppSettings.API_URL + '/api/account/register', JSON.stringify(registerForm), options);
    }

    logout() {
        //sessionStorage.removeItem('accessToken');
        let headers = new Headers({ 'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken') });
        //headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('accessToken'));
        let options = new RequestOptions({ headers: headers });
        return this.http.post(AppSettings.API_URL + '/api/account/Logout', options).map((res: Response) => res.json());
    }

    getUser() {
        let headers = new Headers({ 'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken') });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(AppSettings.API_URL + '/api/account/UserInfo', options).map((res: Response) => res.json());

    }

}