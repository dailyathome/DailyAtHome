import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../services/products.service'

@Component({
    selector: 'product-details',
    templateUrl: 'product-details.component.html',
    providers: [ProductsService]

})

export class ProductDetails implements OnInit {

    constructor(private _productsSvc: ProductsService) { }

    ngOnInit() {

    }

}