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
var products_service_1 = require("../../services/products.service");
var admin_service_1 = require("../../services/admin.service");
var AdmSubCategoryComponent = (function () {
    function AdmSubCategoryComponent(productsService, adminSvc) {
        this.productsService = productsService;
        this.adminSvc = adminSvc;
    }
    ;
    AdmSubCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ShowUpdate = true;
        this.productsService.getCategories()
            .subscribe(function (result) { return _this.categories = result; });
    };
    AdmSubCategoryComponent.prototype.onCategorySelect = function (option) {
        this.seloption = option;
    };
    AdmSubCategoryComponent = __decorate([
        core_1.Component({
            selector: 'dah-admsubcategory',
            templateUrl: 'app/admin/subcategories/admsubcategory.component.html',
            providers: [products_service_1.ProductsService, admin_service_1.AdminService]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService, admin_service_1.AdminService])
    ], AdmSubCategoryComponent);
    return AdmSubCategoryComponent;
}());
exports.AdmSubCategoryComponent = AdmSubCategoryComponent;
//# sourceMappingURL=admsubcategory.component.js.map