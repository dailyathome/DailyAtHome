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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_settings_1 = require("../app.settings");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.authSource = new BehaviorSubject_1.BehaviorSubject(this.isLoggedIn());
        this.authstatus = this.authSource.asObservable();
    }
    AuthService.prototype.updateAuthStatus = function () {
        this.authSource.next(this.isLoggedIn());
    };
    AuthService.prototype.isLoggedIn = function () {
        if (sessionStorage.getItem('accessToken'))
            return true;
        else
            return false;
    };
    AuthService.prototype.login = function (loginForm) {
        return this.http.post(app_settings_1.AppSettings.API_URL + "/token", "UserName=" + encodeURIComponent(loginForm.userName) +
            "&Password=" + encodeURIComponent(loginForm.password) +
            "&grant_type=password").
            map(function (res) { return res.json(); });
    };
    AuthService.prototype.register = function (registerForm) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // headers.append();
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(app_settings_1.AppSettings.API_URL + '/api/account/register', JSON.stringify(registerForm), options);
    };
    AuthService.prototype.logout = function () {
        //sessionStorage.removeItem('accessToken');
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken') });
        //headers.append('Authorization', 'Bearer ' + sessionStorage.getItem('accessToken'));
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(app_settings_1.AppSettings.API_URL + '/api/account/Logout', options).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUser = function () {
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + sessionStorage.getItem('accessToken') });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get(app_settings_1.AppSettings.API_URL + '/api/account/UserInfo', options).map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map