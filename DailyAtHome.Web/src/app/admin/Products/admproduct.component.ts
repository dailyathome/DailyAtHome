import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AdminService } from '../../services/admin.service';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
    selector: 'dah-admproduct',
    templateUrl: 'admproduct.component.html',
    providers: [ProductsService, AdminService]

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
    src: string = "";



    constructor(private productsService: ProductsService, private adminSvc: AdminService) { }

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

    SaveEdit(Product) {
        console.log(Product);
        Product.Image = this.src;
        this.adminSvc.UpdateProduct(Product)
            .subscribe(result => {
                this.updateSuccess = result.ok ? true : false,
                    this.updateFail = result.ok ? false : true,
                    this.productsService.getProductsBySubCategory(+this.SelSubCategoryOption)
                        .subscribe(result => this.ProductsBySubcategory = result);
            });
    }

    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 75,
        resizeMaxWidth: 75
    };

    selected(imageResult: ImageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }


}