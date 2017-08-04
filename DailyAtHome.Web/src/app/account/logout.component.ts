import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: '<logout></logout>',
    templateUrl: 'logout.component.html'
})
export class LogoutComponent implements OnInit {
    constructor(private _authSvc: AuthService) { }
    logoutResult = {
        success: false,
        message: ''
    }
    ngOnInit() {
        sessionStorage.removeItem('accessToken');
        this.logoutResult = {
            success: true,
            message: 'You have successfully Logged Out.'
        }
        this._authSvc.updateAuthStatus();

        //this._authSvc.logout().
        //    subscribe(
        //    data => {
        //        console.log(data);
        //        sessionStorage.removeItem('accessToken');
        //        this._authSvc.updateAuthStatus();
        //        this.logoutResult = {
        //            success: true,
        //            message: 'You have successfully Logged Out.'
        //        }
        //    },
        //    error => {
        //        this.logoutResult = {
        //            success: false,
        //            message: 'Something went wrong! Please try again.'
        //        }
        //    });
    }
}