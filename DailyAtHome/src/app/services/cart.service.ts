﻿import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { DefaultCheckout, IDiscount } from "./checkout.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CartService {

    private cartSource = new BehaviorSubject<number>(0);
    cartStatus = this.cartSource.asObservable();

    updateCartStatus(status: number) {
        this.cartSource.next(status);
    }
    private cart: Product[] = [];
    // private discount: IDiscount;
    //addItem(product: Product) {
    //    this.cart.push(product);
    //}
    deleteItem(product: Product, cartName: string) {
        this.cart = this.cart.filter(cartItem => cartItem.id !== product.id);
        this.saveItems(cartName);
    }

    updateItem(product: Product, cartName: string) {
        this.cart.forEach(a => product.id == a.id ? a.quantity = product.quantity : a.quantity);
        this.saveItems(cartName);
    }
    clearCart() {
        this.cart = [];
    }
    //applyDiscount(code: string) {
    //    this.discount = discounts.filter(discount => discount.code == code)[0];
    //}
    //getCart(): Product[] {
    //    return this.cart;
    //}
    getTotalPrice() {
        let totalPrice = this.cart.reduce((sum, cartItem) => {
            return sum += cartItem.price, sum;
        }, 0);
        //if (this.discount) {
        //    totalPrice -= totalPrice = this.discount.amount;
        //}
        return totalPrice;
    }
    saveItems(cartName: string) {
        if (localStorage != null && JSON != null) {
            localStorage[cartName + "_items"] = JSON.stringify(this.cart);
            var counter = 0;
            this.cart.forEach(q => counter += q.quantity);
            this.updateCartStatus(counter);
        }
    }

    getTotalQuantity(cartName: string) {
        var items = this.getItems(cartName);
        var counter = 0;
        if (items)
            items.forEach(q => counter += q.quantity);
        return counter;
    }
    addItem(product: Product, cartName: string) {
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
    }

    getItems(cartName: string) {
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
    }

    getTotalCount(cartName: string) {
        this.cart = this.getItems(cartName);
        var count = 0;
        for (var i = 0; i < this.cart.length; i++) {
            var item = this.cart[i];
            count += this.toNumber(item.quantity);
        }
        return count;
    }

    toNumber = function (value) {
        value = value * 1;
        return isNaN(value) ? 0 : value;
    }
}

