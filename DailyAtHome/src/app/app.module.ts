import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { AdmCategoryComponent } from './admin/categories/admcategory.component';
import { AdmSubCategoryComponent } from './admin/subcategories/admsubcategory.component';
import { AppRoutingModule, routingComponents, providers } from './app.routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CartService } from '../app/services/cart.service';
import { AuthService } from '../app/services/auth.service';
import { ImageUploadModule } from 'ng2-imageupload';
import { AdmProductComponent} from '../app/admin/Products/admproduct.component'
import { SpinnerComponent } from '../app/spinner/spinner.component';
import { SpinnerService } from '../app/services/spinner.service';
//import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpModule, ImageUploadModule ],
    declarations: [AppComponent, HeaderComponent, CartComponent, AdmCategoryComponent, AdmSubCategoryComponent, SpinnerComponent, routingComponents, AdmProductComponent],
    bootstrap: [AppComponent],
    providers: [CartService, AuthService, SpinnerService, providers],
})
export class AppModule { }
