import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidation } from '../validators/validator.password';
import { AuthGuard } from '../utility/utility.auth-guard';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'register',
    templateUrl: 'app/account/register.component.html'
})

export class RegisterComponent implements OnInit {
    constructor(private _formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private _authSvc: AuthService) { }

    registerForm: FormGroup;
    ngOnInit() {
        this.registerForm = this._formBuilder.group({
            userName: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(6), Validators.pattern('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$')]],
            confirmPassword: [null, Validators.required]
        }, {
           validator: PasswordValidation.MatchPassword
       });
    }
   
    registerResult: any = {
        success: '',
        message: ''
    }
}