import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { animate, trigger, transition, style } from '@angular/animations';

@Component({
    selector: 'cart-summary',
    templateUrl: 'cart-summary.component.html',
    styleUrls: ['cart-summary.component.min.css'],
    animations: [
        trigger('flyOut', [
            transition(':leave', [
                animate('1s', style({
                    transform:'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class CartSummaryComponent implements OnInit {
    subTotalAmt: number = 0;
    numOfCartItems: number=0;
    constructor(private _cartSvc: CartService) { }
    products: Product[];
    animate: string[] = [''];
    ngOnInit() {
       // this.products = this._cartSvc.getItems('dahCart');
        //this._cartSvc.updateCartStatus(this.products);
        this._cartSvc.cartStatus.subscribe(
            (r) => {
                this.products = r;
                var count = 0, amt = 0;
                for (var i = 0; i < r.length; i++) {
                    count = count + r[i].quantity;
                    var total = r[i].price * r[i].quantity;
                    amt = amt + total;
                }
                this.numOfCartItems = count;
                this.subTotalAmt = amt;
            }
        );
    }

    onDeleteClick(product,i) {
        this.animate[i] = 'hinge animated';
        this._cartSvc.deleteItem({
            id: product.id,
            description: product.description,
            price: product.price,
            quantity: 1,
            name: product.name
        }, 'dahCart');
    }

    onUpdateClick(product) {
        this._cartSvc.updateItem({
            id: product.id,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            name: product.name
        }, 'dahCart');
    }

    stopanimate(i) {
        this.animate[i] = '';
    }
}