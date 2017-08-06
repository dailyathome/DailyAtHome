import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AdminService } from '../../services/admin.service';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { SpinnerService } from '../../services/spinner.service';

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
    ShowAddProductBtn: boolean;
    AddProductCategories: any[];
    AddProductSubCategories: any[];

    constructor(private productsService: ProductsService, private adminSvc: AdminService, private _spinnerSvc: SpinnerService) { }

    ngOnInit() {
        this.ShowUpdate = true;
        this.ShowSubCategories = false;
        this._spinnerSvc.displaySpinner(true);
        this.productsService.getCategories()
            .subscribe(result => this.categories = result);
        this._spinnerSvc.displaySpinner(false);
    }

    onCategorySelect(option: string) {
        this.SelCategoryoption = option;
        this._spinnerSvc.displaySpinner(true);
        this.productsService.getSubCategoriesByCategoryID(+this.SelCategoryoption)
            .subscribe(result => this.subCategoriesByID = result);
        this.ShowSubCategories = true;
        this._spinnerSvc.displaySpinner(false);
    }

    onSubCategorySelect(option: string) {
        this._spinnerSvc.displaySpinner(true);
        this.SelSubCategoryOption = option;
        this.productsService.getProductsBySubCategory(+this.SelSubCategoryOption)
            .subscribe(result => this.ProductsBySubcategory = result);


        this.ShowUpdateProducts = true;
        this._spinnerSvc.displaySpinner(false);

    }

    toggleEdit(Product) {
        Product.showEdit = Product.showEdit ? false : true;
    }

    CancelEdit(Product) {
        this.productsService.getProductsBySubCategory(+this.SelSubCategoryOption)
            .subscribe(result => this.ProductsBySubcategory = result);
    }

    SaveEdit(Product) {
        this._spinnerSvc.displaySpinner(true);
        Product.Image = this.src;
        this.adminSvc.UpdateProduct(Product)
            .subscribe(result => {
                this.updateSuccess = result.ok ? true : false,
                    this.updateFail = result.ok ? false : true,
                    this.productsService.getProductsBySubCategory(+this.SelSubCategoryOption)
                        .subscribe(result => this.ProductsBySubcategory = result);
            });
        this._spinnerSvc.displaySpinner(false);
    }

    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 300,
        resizeMaxWidth: 300
    };

    selected(imageResult: ImageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }

    AddNewProduct() {
        this.ShowUpdate = false;
        //this.productsService.getCategories()
        //    .subscribe(result => this.AddProductCategories = result);
        
    }

    Add(Product: any) {
        this._spinnerSvc.displaySpinner(true);
        Product.Image = this.src;
        this.SelSubCategoryOption = Product.SubCategoryID;
        this.adminSvc.AddProduct(Product)
            .subscribe(result => {
                this.updateSuccess = result.ok ? true : false,
                    this.updateFail = result.ok ? false : true,
                    this.ShowUpdate = true;
                this.productsService.getProductsBySubCategory(+this.SelSubCategoryOption)
                    .subscribe(result => this.ProductsBySubcategory = result);
            });
        this._spinnerSvc.displaySpinner(false);
    }


}