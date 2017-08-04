import { Component, OnInit, NgZone } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AdminService } from '../../services/admin.service';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';


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

    constructor(private zone: NgZone, private productsService: ProductsService, private adminSvc: AdminService) { };

    ngOnInit() {
        this.ShowUpdate = true;
        this.ShowSubCategories = false;
        this.productsService.getCategories()
            .subscribe(result => this.categories = result);
    }

    toggleEdit(subCategory) {
        subCategory.showEdit = subCategory.showEdit ? false : true;
    }

    CancelEdit(subCategory) {
        this.productsService.getSubCategoriesByCategoryID(+this.seloption)
            .subscribe(result => this.subCategoriesByID = result);
    }

    onCategorySelect (option:string){
        this.seloption = option;
        this.updateSuccess = false;
        this.updateFail = false;
        this.productsService.getSubCategoriesByCategoryID(+this.seloption)
            .subscribe(result => this.subCategoriesByID = result);

        this.ShowSubCategories = true;

    }

    SaveEdit(Subcat) {
        Subcat.SubCategoryImage = this.src;
        this.adminSvc.UpdateSubCategory(Subcat)
            .subscribe(result => {
                this.updateSuccess = result.ok ? true : false,
                    this.updateFail = result.ok ? false : true,
                    this.productsService.getSubCategoriesByCategoryID(+this.seloption)
                        .subscribe(result => this.subCategoriesByID = result);
            });
    }

    AddNewSubCategory() {
        this.ShowUpdate = false;
        this.productsService.getCategories()
            .subscribe(result => this.categories = result);
    }

    ShowUpdateSubCategories() {
        this.ShowUpdate = true;
    }

    Add(subCategoryItem: any) {

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
    }

    resizeOptions: ResizeOptions = {
        resizeMaxHeight: 128,
        resizeMaxWidth: 128
    };

    selected(imageResult: ImageResult) {
        this.src = imageResult.resized
            && imageResult.resized.dataURL
            || imageResult.dataURL;
    }
}