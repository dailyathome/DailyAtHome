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
require("rxjs/add/operator/map");
var app_settings_1 = require("../app.settings");
var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
    }
    ;
    AdminService.prototype.UpdateCategory = function (category) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(app_settings_1.AppSettings.API_URL + '/api/admin/UpdateCategory', JSON.stringify(category), options)
            .map(function (response) { return response; });
    };
    AdminService.prototype.UpdateSubCategory = function (subCategory) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(app_settings_1.AppSettings.API_URL + '/api/admin/UpdateSubCategory', JSON.stringify(subCategory), options)
            .map(function (response) { return response; });
    };
    AdminService.prototype.AddCategory = function (category) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(app_settings_1.AppSettings.API_URL + '/api/admin/AddCategory', JSON.stringify(category), options)
            .map(function (response) { return response; });
    };
    AdminService.prototype.AddSubCategory = function (subCategoryItem) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(app_settings_1.AppSettings.API_URL + '/api/admin/AddSubCategory', JSON.stringify(subCategoryItem), options)
            .map(function (response) { return response; });
    };
    AdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map