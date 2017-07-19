import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'cart',
    templateUrl: 'app/cart/cart.component.html'
})
export class CartComponent implements OnInit {
    constructor(private _cartSvc: CartService) { }
    public cartItemsCount: number = 0;
    count: number
    message: string;
    products: Product[] = [];
    ngOnInit() {
        this._cartSvc.cartStatus.subscribe(
            (status) => this.count = status
        )
        this.products = this._cartSvc.getItems("dahCart");
    }
}