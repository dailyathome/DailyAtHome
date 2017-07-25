import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';

@Component({
    selector:'login',
    templateUrl: 'app/account/login.component.html',
    providers:[AuthService]
})

export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _authSvc: AuthService ) { }

    ngOnInit() {
        // reset login status
        this._authSvc.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

   

    login() {
        this.loading = true;
        this._authSvc.login(this.loginForm.value)
            .subscribe(
            data => {
                sessionStorage.setItem('accessToken', data.access_token);
                // login successful so redirect to return url
                this.router.navigateByUrl(this.returnUrl);
            },
            error => {
                // login failed so display error
                this.loading = false;
            });
    }
}