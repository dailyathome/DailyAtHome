"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("angular2/core");
var discounts_mock_json_1 = require("../Mock/discounts.mock.json");
var CartService = (function () {
    function CartService() {
        this.cart = [];
    }
    CartService.prototype.addItem = function (item) {
        this.cart.push(item);
    };
    CartService.prototype.deleteItem = function (item) {
        this.cart = this.cart.filter(function (cartItem) { return cartItem.id !== item.id; });
    };
    CartService.prototype.clearCart = function () {
        this.cart = [];
    };
    CartService.prototype.applyDiscount = function (code) {
        this.discount = discounts_mock_json_1.discounts.filter(function (discount) { return discount.code == code; })[0];
    };
    CartService.prototype.getCart = function () {
        return this.cart;
    };
    CartService.prototype.getTotalPrice = function () {
        var totalPrice = this.cart.reduce(function (sum, cartItem) {
            return sum += cartItem.price, sum;
        }, 0);
        if (this.discount) {
            totalPrice -= totalPrice = this.discount.amount;
        }
        return totalPrice;
    };
    CartService = __decorate([
        core_1.Injectable()
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map