import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'cart-summary',
    templateUrl: 'app/cart/cart-summary.component.html',
    styles:[`.cart-summary td,th{vertical-align: middle; text-align:center; }`]
})
export class CartSummaryComponent implements OnInit {
    constructor(private _cartSvc: CartService) { }
    products: Product[];
    ngOnInit() {
        this.products = this._cartSvc.getItems('dahCart');
    }
}