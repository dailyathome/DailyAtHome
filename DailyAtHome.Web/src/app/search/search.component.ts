import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [ProductsService],
    styleUrls: ['search.component.css']
})
export class SearchComponent {

    public searchInput = '';
    showResult: boolean = false;
    products = [];

    constructor(private productSvc: ProductsService, private routeSvc: Router) { }

    searchProducts() {
        if (this.searchInput.length > 2) {
            this.productSvc.getProducts(this.searchInput).subscribe(
                (res) => {
                    this.products = res;
                    if (!res) this.showResult = false;
                }
            )
        }
    }

    toggleSearchResult() {
        this.showResult ? setTimeout(() => { this.showResult = false; }, 100) : this.showResult = true;
    }

    onsearchItemClick(id) {
        this.routeSvc.navigate(['product-details']);
    }
}