import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'cart-summary',
    templateUrl: 'app/cart/cart-summary.component.html',
    styleUrls: ['app/cart/cart-summary.component.min.css']
})
export class CartSummaryComponent implements OnInit {
    constructor(private _cartSvc: CartService) { }
    products: Product[];
    ngOnInit() {
        this.products = this._cartSvc.getItems('dahCart');
    }
}