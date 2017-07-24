import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AdminService } from '../../services/admin.service';


@Component({
    selector: 'dah-admsubcategory',
    templateUrl: 'app/admin/subcategories/admsubcategory.component.html',
    providers: [ProductsService, AdminService]

})

export class AdmSubCategoryComponent implements OnInit {

    ShowUpdate: boolean;
    categories: any[];
    seloption: string;

    constructor(private productsService: ProductsService, private adminSvc: AdminService) { };

    ngOnInit() {
        this.ShowUpdate = true;
        this.productsService.getCategories()
            .subscribe(result => this.categories = result);
    }

    onCategorySelect(option:string){
        this.seloption = option;

    }

}