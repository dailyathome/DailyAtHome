import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AdminService } from '../../services/admin.service';
import { Response } from '@angular/http';

@Component({
    selector: 'dah-admcategory',
    templateUrl: 'app/admin/categories/admcategory.component.html',
    providers: [ProductsService, AdminService]
})


export class AdmCategoryComponent implements OnInit {

    option: string;
    categories: any[];
    updateSuccess: boolean;
    updateFail: boolean;
    UpdateCategoryErrorMsg: string;
    ShowUpdate: boolean;


    constructor(private productsService: ProductsService, private adminSvc: AdminService) { };

    ngOnInit() {
        this.ShowUpdate = true;
        this.productsService.getCategories()
            .subscribe(result => this.categories = result);
    }

    toggleEdit(category) {
        category.showEdit = category.showEdit ? false : true;
    }

    CancelEdit(category) {
        this.productsService.getCategories()
            .subscribe(result => this.categories = result);
    }

    SaveEdit(category) {
        this.adminSvc.UpdateCategory(category)
            .subscribe(result => {
                this.updateSuccess = result.ok ? true : false,
                    this.updateFail = result.ok ? false : true,
                    this.productsService.getCategories()
                        .subscribe(result => this.categories = result);
            });
    }
    AddNewCategory() {
        this.ShowUpdate = false;
    }
    ShowUpdateCategories() {
        this.ShowUpdate = true;
    }
    Add(category) {
        this.adminSvc.AddCategory(category)
            .subscribe(result => {
                this.updateSuccess = result.ok ? true : false,
                    this.updateFail = result.ok ? false : true,
                    this.ShowUpdate = true;
                    this.productsService.getCategories()
                        .subscribe(result => this.categories = result);
            });
    }

}