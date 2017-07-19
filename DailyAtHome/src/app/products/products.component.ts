import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { CartComponent } from '../cart/cart.component';
//import 'rxjs/add/operator/toPromise';

@Component({
    selector: '<products></products>',
    templateUrl: 'app/products/products.component.html',
    styles: [`.panel-title{ font-weight:bold}`],
    providers: [ProductsService, CartService, CartComponent]
})
export class ProductsComponent implements OnInit {
    constructor(private _route: ActivatedRoute, private _products: ProductsService, private _cartSvc: CartService, private _cart: CartComponent) { }
    productId: number;
    products = [];
    ngOnInit() {
        this._route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getProducts(id);
        });
    }
    getProducts(ID: number) {
        this._products.getProductsBySubCategory(ID).subscribe(
            response => this.products = response
        )
    }
    onAddToCartClick(product) {
        console.log(product);
        this._cartSvc.addItem({
            id: product.ID,
            description: product.Description,
            price: product.Cost,
            quantity: 1,
            name: product.Product
        }, 'dahCart');

        this._cart.updateCart();
    }
}