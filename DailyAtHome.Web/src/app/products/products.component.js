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
var products_service_1 = require("../services/products.service");
var cart_service_1 = require("../services/cart.service");
//import 'rxjs/add/operator/toPromise';
var ProductsComponent = (function () {
    function ProductsComponent(_route, _products, _cartSvc) {
        this._route = _route;
        this._products = _products;
        this._cartSvc = _cartSvc;
        this.products = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._cartSvc.cartStatus.subscribe(function (status) { return _this.productsArray = status; });
        this._route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.getProducts(id);
        });
    };
    ProductsComponent.prototype.getProducts = function (ID) {
        var _this = this;
        this._products.getProductsBySubCategory(ID).subscribe(function (response) { return _this.products = response; });
    };
    ProductsComponent.prototype.onAddToCartClick = function (product) {
        this._cartSvc.addItem({
            id: product.ID,
            description: product.Description,
            price: product.Cost,
            quantity: 1,
            name: product.Product
        }, 'dahCart');
        //console.log(this._cartSvc.getItems('dahCart'));
        //this._cartSvc.updateCartStatus(this._cartSvc.getTotalCount('dahCart'));
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: '<products></products>',
            templateUrl: 'app/products/products.component.html',
            styles: [".panel-title{ font-weight:bold}\n.panel input{\nwidth:60px; margin-top:6px;\n}\n"],
            providers: [products_service_1.ProductsService]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, products_service_1.ProductsService, cart_service_1.CartService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map