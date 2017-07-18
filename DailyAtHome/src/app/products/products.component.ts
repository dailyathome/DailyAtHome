import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: '<products></products>',
    templateUrl: 'app/products/products.component.html',
    styles: [`.panel-title{ font-weight:bold}`],
    providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
    constructor(private _route: ActivatedRoute, private _products: ProductsService) { }
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
}