import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';


@Component({
    selector: 'cart',
    templateUrl: 'app/cart/cart.component.html',
    styles:['div{margin:15px;}']
})
export class CartComponent implements OnInit {
    constructor(private _cartSvc: CartService) { }
    numOfCartItems: number
    ngOnInit() {
        this.numOfCartItems = this._cartSvc.getTotalQuantity("dahCart");
        console.log('Toal Cart Items' + this.numOfCartItems);
        this._cartSvc.updateCartStatus(this.numOfCartItems);
        this._cartSvc.cartStatus.subscribe(
            (status) => this.numOfCartItems = status
        )
        //this.products = this._cartSvc.getItems("dahCart");
    }
}