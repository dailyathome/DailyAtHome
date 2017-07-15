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
var products_service_1 = require("../services/products.service");
var HeaderComponent = (function () {
    function HeaderComponent(productsSvc) {
        this.productsSvc = productsSvc;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsSvc.getCategories()
            .subscribe(function (result) { return _this.categories = result; });
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'dah-header',
            templateUrl: 'app/header/header.component.html',
            providers: [products_service_1.ProductsService]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map