import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'cart',
    templateUrl: 'app/cart/cart.component.html',
    providers: [CartService]
})
export class CartComponent implements OnInit {
    constructor(private _cartSvc: CartService) { }
    cartItemsCount: number = 0;
    products: Product[] = [];
    ngOnInit() {
       this.products = this._cartSvc.getItems("dahCart");
    }
    updateCart() {
        this.cartItemsCount = this._cartSvc.getItems('dahCart').length;
        console.log('update cart called: total products: ' + this.cartItemsCount);
    }
    
}