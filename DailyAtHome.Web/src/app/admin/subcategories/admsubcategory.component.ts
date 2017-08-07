import { Component, OnInit, NgZone } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AdminService } from '../../services/admin.service';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';
import { SpinnerService } from '../../services/spinner.service';


@Component({
    selector: 'dah-admsubcategory',
    templateUrl: 'admsubcategory.component.html',
    providers: [ProductsService, AdminService]

})

export class AdmSubCategoryComponent implements OnInit {

    ShowUpdate: boolean;
    categories: any[];
    seloption: string;
    subCategoriesByID: any[];
    ShowSubCategories: boolean;
    updateSuccess: boolean;
    updateFail: boolean;
    src: string = "";

    constructor(private zone: NgZone, private productsService: ProductsService, private adminSvc: AdminService, private _spinnerSvc: SpinnerService) { };

    ngOnInit() {
        this._spinnerSvc.displaySpinner(true);
        this.ShowUpdate = true;
        this.ShowSubCategories = false;
        this.productsService.getCategories()
            .subscribe(result => this.categories = result);
        this.src = '';
        this._spinnerSvc.displaySpinner(false);
    }

    toggleEdit(subCategory) {
        this._spinnerSvc.displaySpinner(true);
        subCategory.showEdit = subCategory.showEdit ? false : true;
        this._spinnerSvc.displaySpinner(false);
    }

    CancelEdit(subCategory) {
        this._spinnerSvc.displaySpinner(true);
        this.productsService.getSubCategoriesByCategoryID(+this.seloption)
            .subscribe(result => this.subCategoriesByID = result);
        this.src = '';
        this._spinnerSvc.displaySpinner(false);
    }

    onCategorySelect(option: string) {
        this._spinnerSvc.displaySpinner(true);
        this.seloption = option;
        this.updateSuccess = false;
        this.updateFail = false;
        this.productsService.getSubCategoriesByCategoryID(+this.seloption)
            .subscribe(result => this.subCategoriesByID = result);

        this.ShowSubCategories = true;
        this._spinnerSvc.displaySpinner(false);

    }

    SaveEdit(Subcat) {
        this._spinnerSvc.displaySpinner(true);
        Subcat.SubCategoryImage = this.src;
        this.adminSvc.UpdateSubCategory(Subcat)
            .subscribe(result => {
                this.updateSuccess = result.ok ? true : false,
                    this.updateFail = result.ok ? false : true,
                    this.productsService.getSubCategoriesByCategoryID(+this.seloption)
                        .subscribe(result => this.subCategoriesByID = result);
            });
        this.src = '';
        this._spinnerSvc.displaySpinner(false);
    }

    AddNewSubCategory() {
        this._spinnerSvc.displaySpinner(true);
        this.ShowUpdate = false;
        this.productsService.getCategories()
            .subscribe(result => this.categories = result);
        this.src = '';
        this._spinnerSvc.displaySpinner(false);
    }

    ShowUpdateSubCategories() {
        this.ShowUpdate = true;
    }

    Add(subCategoryItem: any) {
        this._spinnerSvc.displaySpinner(true);
        subCategoryItem.Image = this.src;
        this.seloption = subCategoryItem.CategoryID;
        this.adminSvc.AddSubCategory(subCategoryItem)
            .subscribe(result => {
                this.updateSuccess = result.ok ? true : false,
                    this.updateFail = result.ok ? false : true,
                    this.ShowUpdate = true;
                this.productsService.getSubCategoriesByCategoryID(+this.seloption)
                    .subscribe(result => this.subCategoriesByID = result);
            });
        this.src = '';
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
}