"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var CartService = (function () {
    function CartService() {
        this.cartSource = new BehaviorSubject_1.BehaviorSubject(0);
        this.cartStatus = this.cartSource.asObservable();
        this.cart = [];
        this.toNumber = function (value) {
            value = value * 1;
            return isNaN(value) ? 0 : value;
        };
    }
    CartService.prototype.updateCartStatus = function (status) {
        this.cartSource.next(status);
    };
    // private discount: IDiscount;
    //addItem(product: Product) {
    //    this.cart.push(product);
    //}
    CartService.prototype.deleteItem = function (product, cartName) {
        this.cart = this.cart.filter(function (cartItem) { return cartItem.id !== product.id; });
        this.saveItems(cartName);
    };
    CartService.prototype.updateItem = function (product, cartName) {
        this.cart.forEach(function (a) { return product.id == a.id ? a.quantity = product.quantity : a.quantity; });
        this.saveItems(cartName);
    };
    CartService.prototype.clearCart = function () {
        this.cart = [];
    };
    //applyDiscount(code: string) {
    //    this.discount = discounts.filter(discount => discount.code == code)[0];
    //}
    //getCart(): Product[] {
    //    return this.cart;
    //}
    CartService.prototype.getTotalPrice = function () {
        var totalPrice = this.cart.reduce(function (sum, cartItem) {
            return sum += cartItem.price, sum;
        }, 0);
        //if (this.discount) {
        //    totalPrice -= totalPrice = this.discount.amount;
        //}
        return totalPrice;
    };
    CartService.prototype.saveItems = function (cartName) {
        if (localStorage != null && JSON != null) {
            localStorage[cartName + "_items"] = JSON.stringify(this.cart);
            var counter = 0;
            this.cart.forEach(function (q) { return counter += q.quantity; });
            this.updateCartStatus(counter);
        }
    };
    CartService.prototype.getTotalQuantity = function (cartName) {
        var items = this.getItems(cartName);
        var counter = 0;
        if (items)
            items.forEach(function (q) { return counter += q.quantity; });
        return counter;
    };
    CartService.prototype.addItem = function (product, cartName) {
        // quantity = this.toNumber(product.quantity);
        if (product.quantity != 0) {
            // update quantity for existing item
            var found = false;
            for (var i = 0; i < this.cart.length && !found; i++) {
                var item = this.cart[i];
                if (item.id == product.id) {
                    found = true;
                    item.quantity = this.toNumber(item.quantity + product.quantity);
                    if (item.quantity <= 0) {
                        this.cart.splice(i, 1);
                    }
                }
            }
            // new item, add now
            if (!found) {
                this.cart.push(product);
            }
            // save changes
            this.saveItems(cartName);
        }
    };
    CartService.prototype.getItems = function (cartName) {
        this.clearCart();
        var items = localStorage != null ? localStorage[cartName + "_items"] : null;
        if (items != null && JSON != null) {
            try {
                var items = JSON.parse(items);
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.id != null && item.name != null && item.price != null && item.quantity != null) {
                        this.cart.push(item);
                    }
                }
            }
            catch (err) {
                // ignore errors while loading...
            }
            return this.cart;
        }
    };
    CartService.prototype.getTotalCount = function (cartName) {
        this.cart = this.getItems(cartName);
        var count = 0;
        for (var i = 0; i < this.cart.length; i++) {
            var item = this.cart[i];
            count += this.toNumber(item.quantity);
        }
        return count;
    };
    CartService = __decorate([
        core_1.Injectable()
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map