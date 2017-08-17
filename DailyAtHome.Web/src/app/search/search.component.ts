import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [ProductsService],
    styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

    public searchInput = '';
    animate: string = '';
    showResult: boolean = false;
    searchBy: string = 'All';
    products = [];
    categories = [];
    constructor(private productSvc: ProductsService, private routeSvc: Router) { }

    ngOnInit() {
        if (localStorage && localStorage.getItem('categories')) {
            this.categories = JSON.parse(localStorage.getItem('categories'));
        }
        else {
            this.productSvc.getCategories().subscribe(result => {
                this.categories = result;
                localStorage.setItem('categories', JSON.stringify(result));
            });
        }
    }

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

    onSearchByClick(searchBy) {
        this.searchBy = searchBy;
        this.animate = 'slideInDown animated';
    }

    stopanimate() {
        this.animate = '';
    }
}