import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
    selector: 'dah-admin',
    templateUrl: 'app/admin/admin.component.html',
    providers: [ProductsService]
})

export class AdminComponent {
    option: string;
    categories: any[];

    constructor(private productsService: ProductsService) { };

    onSelect(option: string) {
        this.option = option
    }

}