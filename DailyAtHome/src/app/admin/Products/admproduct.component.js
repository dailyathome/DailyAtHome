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
var AdmProductComponent = (function () {
    function AdmProductComponent(productsService) {
        this.productsService = productsService;
    }
    AdmProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ShowUpdate = true;
        this.ShowSubCategories = false;
        this.productsService.getCategories()
            .subscribe(function (result) { return _this.categories = result; });
    };
    AdmProductComponent.prototype.onCategorySelect = function (option) {
        var _this = this;
        this.SelCategoryoption = option;
        this.productsService.getSubCategoriesByCategoryID(+this.SelCategoryoption)
            .subscribe(function (result) { return _this.subCategoriesByID = result; });
        this.ShowSubCategories = true;
    };
    AdmProductComponent.prototype.onSubCategorySelect = function (option) {
        var _this = this;
        this.SelSubCategoryOption = option;
        this.productsService.getProductsBySubCategory(+this.SelSubCategoryOption)
            .subscribe(function (result) { return _this.ProductsBySubcategory = result; });
        this.ShowUpdateProducts = true;
    };
    AdmProductComponent = __decorate([
        core_1.Component({
            selector: 'dah-admproduct',
            templateUrl: 'app/admin/products/admproduct.component.html',
            providers: [products_service_1.ProductsService]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService])
    ], AdmProductComponent);
    return AdmProductComponent;
}());
exports.AdmProductComponent = AdmProductComponent;
//# sourceMappingURL=admproduct.component.js.map