import { Component,OnInit, TemplateRef } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
    selector: 'dah-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    providers: [ProductsService]
})
export class HeaderComponent implements OnInit {
    categories: any[];
    constructor(private productsSvc: ProductsService, private _authSvc: AuthService, private _routerSvc:Router) { }
    
    IsLoggedIn: boolean = this._authSvc.isLoggedIn();

    ngOnInit() {
        this._authSvc.authstatus.subscribe(
            (status) => this.IsLoggedIn = status
        );

        this.productsSvc.getCategories()
            .subscribe(result => this.categories = result);
    }

    logout() {
        this._authSvc.logout()
            .subscribe(
            data => {
                sessionStorage.removeItem('accessToken');
                this._authSvc.updateAuthStatus();
            });
    }

    searchProducts() {
        
    }

    getProducts(id) {
        this._routerSvc.navigate(['products', id]);
        return false;
    }
}