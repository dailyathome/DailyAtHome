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
var AdmCategoryComponent = (function () {
    function AdmCategoryComponent(productsService, adminSvc) {
        this.productsService = productsService;
        this.adminSvc = adminSvc;
    }
    ;
    AdmCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ShowUpdate = true;
        this.productsService.getCategories()
            .subscribe(function (result) { return _this.categories = result; });
    };
    AdmCategoryComponent.prototype.toggleEdit = function (category) {
        category.showEdit = category.showEdit ? false : true;
    };
    AdmCategoryComponent.prototype.CancelEdit = function (category) {
        var _this = this;
        this.productsService.getCategories()
            .subscribe(function (result) { return _this.categories = result; });
    };
    AdmCategoryComponent.prototype.SaveEdit = function (category) {
        var _this = this;
        this.adminSvc.UpdateCategory(category)
            .subscribe(function (result) {
            _this.updateSuccess = result.ok ? true : false,
                _this.updateFail = result.ok ? false : true,
                _this.productsService.getCategories()
                    .subscribe(function (result) { return _this.categories = result; });
        });
    };
    AdmCategoryComponent.prototype.AddNewCategory = function () {
        this.ShowUpdate = false;
    };
    AdmCategoryComponent.prototype.ShowUpdateCategories = function () {
        this.ShowUpdate = true;
    };
    AdmCategoryComponent.prototype.Add = function (categoryItem) {
        var _this = this;
        this.adminSvc.AddCategory(categoryItem)
            .subscribe(function (result) {
            _this.updateSuccess = result.ok ? true : false,
                _this.updateFail = result.ok ? false : true,
                _this.ShowUpdate = true;
            _this.productsService.getCategories()
                .subscribe(function (result) { return _this.categories = result; });
        });
    };
    AdmCategoryComponent = __decorate([
        core_1.Component({
            selector: 'dah-admcategory',
            templateUrl: 'app/admin/categories/admcategory.component.html',
            providers: [products_service_1.ProductsService, admin_service_1.AdminService]
        }),
        __metadata("design:paramtypes", [products_service_1.ProductsService, admin_service_1.AdminService])
    ], AdmCategoryComponent);
    return AdmCategoryComponent;
}());
exports.AdmCategoryComponent = AdmCategoryComponent;
//# sourceMappingURL=admcategory.component.js.map