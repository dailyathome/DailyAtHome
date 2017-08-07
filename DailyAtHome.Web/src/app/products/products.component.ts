import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { SpinnerService } from '../services/spinner.service';
//import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'products',
    templateUrl: 'products.component.html',
    styles: [`.panel-title{ font-weight:bold}
.panel input{
width:60px; margin-top:6px;
}
`],
    providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
    constructor(private _route: ActivatedRoute, private _products: ProductsService, private _cartSvc: CartService, private _spinnerSvc: SpinnerService) { }
    productId: number;
    products = [];
    message: number;
    productsArray: Product[];
    ngOnInit() {
        // this._cartSvc.cartStatus.subscribe(
        // (status) => this.productsArray = status
        //)
        this._route.params.subscribe(params => {
            this._spinnerSvc.displaySpinner(true);
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getProducts(id);
        });
    }
    getProducts(ID: number) {       
        this._products.getProductsBySubCategory(ID).subscribe(
            response => this.products = response,
            error => {
                this._spinnerSvc.displaySpinner(false);
            },
            () => this._spinnerSvc.displaySpinner(false)
        )
    }
    onAddToCartClick(product) {
        this._cartSvc.addItem({
            id: product.ID,
            description: product.Description,
            price: product.Cost,
            quantity: 1,
            name: product.Product,
            image_src: product.Image
        }, 'dahCart');

        //console.log(this._cartSvc.getItems('dahCart'));
        //this._cartSvc.updateCartStatus(this._cartSvc.getTotalCount('dahCart'));
    }
}