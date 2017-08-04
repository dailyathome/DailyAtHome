import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'dah-admproduct',
    templateUrl: 'app/admin/products/admproduct.component.html',
    providers: [ProductsService]

})

export class AdmProductComponent implements OnInit {

    ShowUpdate: boolean;
    categories: any[];
    ShowSubCategories: boolean;
    ShowUpdateProducts: boolean;
    SelCategoryoption: string;
    SelSubCategoryOption: string;
    updateSuccess: boolean;
    updateFail: boolean;
    subCategoriesByID: any[];
    ProductsBySubcategory: any[];



    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.ShowUpdate = true;
        this.ShowSubCategories = false;
        this.productsService.getCategories()
            .subscribe(result => this.categories = result);
    }

    onCategorySelect(option: string) {
        this.SelCategoryoption = option;

        this.productsService.getSubCategoriesByCategoryID(+this.SelCategoryoption)
            .subscribe(result => this.subCategoriesByID = result);
        this.ShowSubCategories = true;
    }

    onSubCategorySelect(option: string) {

        this.SelSubCategoryOption = option;
        this.productsService.getProductsBySubCategory(+this.SelSubCategoryOption)
            .subscribe(result => this.ProductsBySubcategory = result);


        this.ShowUpdateProducts = true;

    }

    toggleEdit(Product) {
        Product.showEdit = Product.showEdit ? false : true;
    }

    CancelEdit(Product) {
        this.productsService.getProductsBySubCategory(+this.SelSubCategoryOption)
            .subscribe(result => this.ProductsBySubcategory = result);
    }


}