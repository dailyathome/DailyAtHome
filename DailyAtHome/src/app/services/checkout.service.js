"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultCheckout = (function () {
    function DefaultCheckout() {
        this._checkOutType = null;
    }
    Object.defineProperty(DefaultCheckout.prototype, "checkOutType", {
        set: function (value) {
            this._checkOutType = value;
        },
        enumerable: true,
        configurable: true
    });
    DefaultCheckout.prototype.checkOut = function (totalPrice) {
        return this._checkOutType ? this._checkOutType.pay(totalPrice) : "Please select method of payment";
    };
    return DefaultCheckout;
}());
exports.DefaultCheckout = DefaultCheckout;
//# sourceMappingURL=checkout.service.js.map