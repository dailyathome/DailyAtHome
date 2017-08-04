"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../services/auth.service");
var spinner_service_1 = require("../services/spinner.service");
var LoginComponent = (function () {
    function LoginComponent(route, router, _authSvc, _spinnerSvc) {
        this.route = route;
        this.router = router;
        this._authSvc = _authSvc;
        this._spinnerSvc = _spinnerSvc;
        this.loginForm = new forms_1.FormGroup({
            userName: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            password: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
        this.loginResult = {
            success: '',
            message: ''
        };
    }
    //IsLoggedIn = this._authSvc.isLoggedIn();
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._spinnerSvc.displaySpinner(true);
        this._authSvc.login(this.loginForm.value)
            .subscribe(function (data) {
            sessionStorage.setItem('accessToken', data.access_token);
            _this._authSvc.updateAuthStatus();
            _this.router.navigateByUrl(_this.returnUrl);
        }, function (error) {
            _this.loginResult = {
                success: false,
                message: JSON.parse(error._body)
            };
        }, function () { return _this._spinnerSvc.displaySpinner(false); });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/account/login.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            auth_service_1.AuthService,
            spinner_service_1.SpinnerService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map