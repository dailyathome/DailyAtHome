import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [ProductsService]
})
export class HomeComponent implements OnInit {
    RandomProducts: any[];
    FeaturedProducts: any[];

    constructor(private productsSvc: ProductsService) { }

    ngOnInit() {
        this.productsSvc.getRandomProducts().subscribe(
            response => this.RandomProducts = response
        );

        this.productsSvc.getFeaturedProducts().subscribe(
            response => this.FeaturedProducts = response
        );
    }

}