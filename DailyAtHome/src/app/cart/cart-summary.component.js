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
var cart_service_1 = require("../services/cart.service");
var animations_1 = require("@angular/animations");
var CartSummaryComponent = (function () {
    function CartSummaryComponent(_cartSvc) {
        this._cartSvc = _cartSvc;
        this.subTotalAmt = 0;
        this.numOfCartItems = 0;
    }
    CartSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this._cartSvc.getItems('dahCart');
        this._cartSvc.updateCartStatus(this.products);
        this._cartSvc.cartStatus.subscribe(function (r) {
            _this.products = r;
            var count = 0, amt = 0;
            for (var i = 0; i < r.length; i++) {
                count = count + r[i].quantity;
                var total = r[i].price * r[i].quantity;
                amt = amt + total;
            }
            _this.numOfCartItems = count;
            _this.subTotalAmt = amt;
        });
    };
    CartSummaryComponent.prototype.onDeleteClick = function (product) {
        this._cartSvc.deleteItem({
            id: product.id,
            description: product.description,
            price: product.price,
            quantity: 1,
            name: product.name
        }, 'dahCart');
    };
    CartSummaryComponent.prototype.onUpdateClick = function (product) {
        this._cartSvc.updateItem({
            id: product.id,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            name: product.name
        }, 'dahCart');
    };
    CartSummaryComponent = __decorate([
        core_1.Component({
            selector: 'cart-summary',
            templateUrl: 'app/cart/cart-summary.component.html',
            styleUrls: ['app/cart/cart-summary.component.min.css'],
            animations: [
                animations_1.trigger('flyInOut', [
                    animations_1.transition(':leave', [
                        animations_1.animate('1s', animations_1.style({
                            transform: 'translateX(100%)'
                        }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [cart_service_1.CartService])
    ], CartSummaryComponent);
    return CartSummaryComponent;
}());
exports.CartSummaryComponent = CartSummaryComponent;
//# sourceMappingURL=cart-summary.component.js.map