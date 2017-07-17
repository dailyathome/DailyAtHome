import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';
import 'rxjs/add/operator/toPromise';

@Component({
    selector: '<products></products>',
    templateUrl: 'app/products/products.component.html',
    providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
    constructor(private _route: ActivatedRoute, private _products: ProductsService) { }
    productId: number;
    products = [];
    ngOnInit() {
        this.productId = Number.parseInt(this._route.snapshot.paramMap.get('id'));
        console.log('PRODUCT ID: ' + this.productId);
        this.getProducts(this.productId);
    }
    getProducts(ID: number) {
        alert('called');
        this._products.getProductsBySubCategory(ID).subscribe(
            response => this.products = response
        )
    }
}