﻿import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html',
    styles: [`div{margin:15px;}
        span.badge {
            background-color: #fff;
            color: #668bb1 !important;
    font-size: 10px;
        }
`
    ]
})
export class CartComponent implements OnInit {
    constructor(private _cartSvc: CartService) { }
    numOfCartItems: number = 0;
    subTotalAmt: number = 0;
    products: Product[];
    animate: string = '';
    ngOnInit() {

        //incase if page gets refreshed.
        this.products = this._cartSvc.getItems('dahCart');
        this._cartSvc.updateCartStatus(this.products);
        this._cartSvc.cartStatus.subscribe(
            (r) => {
                var count = 0, amt = 0;
                if (r != null && r) {
                    for (var i = 0; i < r.length; i++) {
                        count = count + r[i].quantity;
                        var total = r[i].price * r[i].quantity;
                        amt = amt + total;
                    }
                }
                this.numOfCartItems = count;
                this.subTotalAmt = amt;
                this.animate = 'swing animated';
            }
        );
    }

    stopanimate() {
        this.animate = '';
    }
}