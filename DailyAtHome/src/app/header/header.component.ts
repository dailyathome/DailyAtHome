import { Component,OnInit, TemplateRef } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
    selector: 'dah-header',
    templateUrl: 'app/header/header.component.html',
    providers:[ProductsService]
})
export class HeaderComponent implements OnInit {
    categories: any[];

    constructor(private productsSvc: ProductsService) { }

    ngOnInit() {
        this.productsSvc.getCategories()
            .subscribe(result => this.categories = result);
        console.log(this.categories);
    }
}