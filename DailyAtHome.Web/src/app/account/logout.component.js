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
var auth_service_1 = require("../services/auth.service");
var LogoutComponent = (function () {
    function LogoutComponent(_authSvc) {
        this._authSvc = _authSvc;
        this.logoutResult = {
            success: false,
            message: ''
        };
    }
    LogoutComponent.prototype.ngOnInit = function () {
        sessionStorage.removeItem('accessToken');
        this.logoutResult = {
            success: true,
            message: 'You have successfully Logged Out.'
        };
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
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: '<logout></logout>',
            templateUrl: 'app/account/logout.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map