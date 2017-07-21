import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'cart-summary',
    templateUrl: 'app/cart/cart-summary.component.html',
    styleUrls: ['app/cart/cart-summary.component.min.css']
})
export class CartSummaryComponent implements OnInit {

    cartSubTotal: number = 0;
    cartItemsCount: number;
    constructor(private _cartSvc: CartService) { }
    products: Product[];
    ngOnInit() {
        this.products = this._cartSvc.getItems('dahCart');
        this._cartSvc.cartStatus.subscribe(
            (status) => this.cartItemsCount = status
        )
        this.products.forEach(a => this.cartSubTotal = a.quantity * a.price);
        for (var i = 0; i < this.products.length; i++) {
            var total = this.products[i].price * this.products[i].quantity;
            this.cartSubTotal = this.cartSubTotal + total;
        }
    }

    onDeleteClick(product) {
        this._cartSvc.deleteItem({
            id: product.id,
            description: product.description,
            price: product.price,
            quantity: 1,
            name: product.name
        }, 'dahCart');
        this.products = this._cartSvc.getItems('dahCart');
    }

    onUpdateClick(product) {
        this._cartSvc.updateItem({
            id: product.id,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            name: product.name
        }, 'dahCart');
        this.products = this._cartSvc.getItems('dahCart');
    }
}