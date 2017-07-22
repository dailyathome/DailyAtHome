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
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ;
    ProductsService.prototype.getCategories = function () {
        return this.http.get(app_settings_1.AppSettings.API_URL + '/api/header/getCategories').map(function (response) { return response.json(); });
    };
    ProductsService.prototype.getProductsBySubCategory = function (id) {
        var params = new URLSearchParams();
        //params.set('ID', id);
        console.log('PRODUCT ID SELECTED IS: ' + id.toString());
        return this.http.get(app_settings_1.AppSettings.API_URL + '/api/header/GetProductsBySubCategory/' + id).map(function (response) { return response.json(); });
    };
    ProductsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProductsService);
    return ProductsService;
}());
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map