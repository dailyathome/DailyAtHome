import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
//import 'rxjs/add/operator/toPromise';

@Component({
    selector: '<products></products>',
    templateUrl: 'app/products/products.component.html',
    styles: [`.panel-title{ font-weight:bold}`],
    providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
    constructor(private _route: ActivatedRoute, private _products: ProductsService, private _cartSvc: CartService) { }
    productId: number;
    products = [];
    message: number;
    ngOnInit() {
        this._cartSvc.cartStatus.subscribe(
            (status) => this.message = status
            )
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
        this._cartSvc.addItem({
            id: product.ID,
            description: product.Description,
            price: product.Cost,
            quantity: 1,
            name: product.Product
        }, 'dahCart');

        console.log(this._cartSvc.getItems('dahCart'));
        this._cartSvc.updateCartStatus(this._cartSvc.getTotalCount('dahCart'));
    }
}