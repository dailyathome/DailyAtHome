import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
    selector: 'product-details',
    templateUrl: 'product-details.component.html',
    providers: [ProductsService]

})

export class ProductDetails implements OnInit {

    constructor(private _productsSvc: ProductsService, private _spinnerSvc: SpinnerService, private _route: ActivatedRoute) { }
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

}