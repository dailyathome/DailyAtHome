import { Component,OnInit, TemplateRef } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { AuthService } from '../services/auth.service'


@Component({
    selector: 'dah-header',
    templateUrl: 'app/header/header.component.html',
    styleUrls: ['app/header/header.component.css'],
    providers: [ProductsService]
})
export class HeaderComponent implements OnInit {
    categories: any[];
    constructor(private productsSvc: ProductsService, private _authSvc: AuthService) { }
    
    IsLoggedIn: boolean = this._authSvc.isLoggedIn();

    ngOnInit() {
        this._authSvc.authstatus.subscribe(
            (status) => this.IsLoggedIn = status
        );

        this.productsSvc.getCategories()
            .subscribe(result => this.categories = result);
        console.log(this.categories);
    }

    logout() {
        this._authSvc.logout()
            .subscribe(
            data => {
                sessionStorage.removeItem('accessToken');
                this._authSvc.updateAuthStatus();
            });
    }
}