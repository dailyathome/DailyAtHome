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
var validator_password_1 = require("../validators/validator.password");
var auth_service_1 = require("../services/auth.service");
var RegisterComponent = (function () {
    function RegisterComponent(_formBuilder, route, router, _authSvc) {
        this._formBuilder = _formBuilder;
        this.route = route;
        this.router = router;
        this._authSvc = _authSvc;
        this.registerResult = {
            success: '',
            message: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this._formBuilder.group({
            userName: [null, [forms_1.Validators.required, forms_1.Validators.email]],
            password: [null, [forms_1.Validators.required, forms_1.Validators.minLength(6), forms_1.Validators.pattern('^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$')]],
            confirmPassword: [null, forms_1.Validators.required]
        }, {
            validator: validator_password_1.PasswordValidation.MatchPassword
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this._authSvc.register(this.registerForm.value).subscribe(function (data) {
            _this.registerResult = {
                success: true,
                message: 'Please confirm your email by signing in to your ' + _this.registerForm.value.userName
            };
        }, function (error) {
            try {
                _this.registerResult = {
                    success: false,
                    message: error.status == 400 ? JSON.parse(error._body).ModelState[''][1] : JSON.parse(error._body)
                };
            }
            catch (e) {
                _this.registerResult = {
                    success: false,
                    message: 'Something went wrong. Please try again'
                };
            }
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'app/account/register.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            auth_service_1.AuthService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map