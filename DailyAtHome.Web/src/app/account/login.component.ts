import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthGuard } from '../utility/utility.auth-guard';
import { AuthService } from '../services/auth.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        userName: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
    });
    returnUrl: string;
    loginResult: any = {
        success: '',
        message: ''
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _authSvc: AuthService,
        private _spinnerSvc: SpinnerService) { }

    //IsLoggedIn = this._authSvc.isLoggedIn();


    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this._spinnerSvc.displaySpinner(true);
        this._authSvc.login(this.loginForm.value)
            .subscribe(
            data => {
                
                sessionStorage.setItem('accessToken', data.access_token);
                this._authSvc.updateAuthStatus();
                this.router.navigateByUrl(this.returnUrl);
            },
            error => {
                this.loginResult = {
                    success: false,
                    message: JSON.parse(error._body)
                }
            },
            () => this._spinnerSvc.displaySpinner(false)
            );
    }
}