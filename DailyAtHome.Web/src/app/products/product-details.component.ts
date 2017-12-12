import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { SpinnerService } from '../services/spinner.service';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'product-details',
    templateUrl: 'product-details.component.html',
    providers: [ProductsService]

})

export class ProductDetails implements OnInit {

    constructor(private _productsSvc: ProductsService,
        private _spinnerSvc: SpinnerService,
        private _route: ActivatedRoute,
        private _cartSvc: CartService)
    { }
    products = [];

    ngOnInit() {
        this._route.params.subscribe(params => {
            this._spinnerSvc.displaySpinner(true);
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getProductDetailsByID(id);
        });

    }

    getProductDetailsByID(ID: number) {
        this._productsSvc.getProductDetailsById(ID).subscribe(
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