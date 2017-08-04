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
    function AdmSubCategoryComponent(zone, productsService, adminSvc) {
        this.zone = zone;
        this.productsService = productsService;
        this.adminSvc = adminSvc;
        this.src = "";
        this.resizeOptions = {
            resizeMaxHeight: 128,
            resizeMaxWidth: 128
        };
    }
    ;
    AdmSubCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ShowUpdate = true;
        this.ShowSubCategories = false;
        this.productsService.getCategories()
            .subscribe(function (result) { return _this.categories = result; });
    };
    AdmSubCategoryComponent.prototype.toggleEdit = function (subCategory) {
        subCategory.showEdit = subCategory.showEdit ? false : true;
    };
    AdmSubCategoryComponent.prototype.CancelEdit = function (subCategory) {
        var _this = this;
        this.productsService.getSubCategoriesByCategoryID(+this.seloption)
            .subscribe(function (result) { return _this.subCategoriesByID = result; });
    };
    AdmSubCategoryComponent.prototype.onCategorySelect = function (option) {
        var _this = this;
        this.seloption = option;
        this.updateSuccess = false;
        this.updateFail = false;
        this.productsService.getSubCategoriesByCategoryID(+this.seloption)
            .subscribe(function (result) { return _this.subCategoriesByID = result; });
        this.ShowSubCategories = true;
    };
    AdmSubCategoryComponent.prototype.SaveEdit = function (Subcat) {
        var _this = this;
        Subcat.SubCategoryImage = this.src;
        this.adminSvc.UpdateSubCategory(Subcat)
            .subscribe(function (result) {
            _this.updateSuccess = result.ok ? true : false,
                _this.updateFail = result.ok ? false : true,
                _this.productsService.getSubCategoriesByCategoryID(+_this.seloption)
                    .subscribe(function (result) { return _this.subCategoriesByID = result; });
        });
    };
    AdmSubCategoryComponent.prototype.AddNewSubCategory = function () {
        var _this = this;
        this.ShowUpdate = false;
        this.productsService.getCategories()
            .subscribe(function (result) { return _this.categories = result; });
    };
    AdmSubCategoryComponent.prototype.ShowUpdateSubCategories = function () {
        this.ShowUpdate = true;
    };
    AdmSubCategoryComponent.prototype.Add = function (subCategoryItem) {
        var _this = this;
        subCategoryItem.Image = this.src;
        this.seloption = subCategoryItem.CategoryID;
        this.adminSvc.AddSubCategory(subCategoryItem)
            .subscribe(function (result) {
            _this.updateSuccess = result.ok ? true : false,
                _this.updateFail = result.ok ? false : true,
                _this.ShowUpdate = true;
            _this.productsService.getSubCategoriesByCategoryID(+_this.seloption)
                .subscribe(function (result) { return _this.subCategoriesByID = result; });
        });
    };
    AdmSubCategoryComponent.prototype.selected = function (imageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    };
    AdmSubCategoryComponent = __decorate([
        core_1.Component({
            selector: 'dah-admsubcategory',
            templateUrl: 'app/admin/subcategories/admsubcategory.component.html',
            providers: [products_service_1.ProductsService, admin_service_1.AdminService]
        }),
        __metadata("design:paramtypes", [core_1.NgZone, products_service_1.ProductsService, admin_service_1.AdminService])
    ], AdmSubCategoryComponent);
    return AdmSubCategoryComponent;
}());
exports.AdmSubCategoryComponent = AdmSubCategoryComponent;
//# sourceMappingURL=admsubcategory.component.js.map