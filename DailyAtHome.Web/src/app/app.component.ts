import { Component, OnInit, OnDestroy,Output } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component';
//import { } from '../app/products/products.component'
import { CartComponent } from '../app/cart/cart.component'
import { Subscription } from 'rxjs/Subscription';
import { SpinnerService } from '../app/services/spinner.service';
import { SpinnerComponent } from '../app/spinner/spinner.component';
import { SearchComponent } from '../app/search/search.component';
import { AuthService } from '../app/services/auth.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    displaySpinner: boolean;
    spinnerSubscription: Subscription;
    opened: boolean = false;
    constructor(private spinnerService: SpinnerService, private _authSvc: AuthService) { }

    IsLoggedIn: boolean = this._authSvc.isLoggedIn();

    ngOnInit() {
        this.spinnerSubscription = this.spinnerService.spinnerCounter.subscribe((counter: number) => {
            this.displaySpinner = counter != 0;
        });
        this._authSvc.authstatus.subscribe(
            (status) => this.IsLoggedIn = status
        );
    }

    ngOnDestroy() {
        this.spinnerSubscription.unsubscribe();
    }

    menuClick(event) {
        this.closeNav();
        //this.mobileView ? this.mobileView = false : this.mobileView = true;
    }

    openNav() {
        // document.getElementById("myNav").style.width = "100%";
        this.opened = true;
    }

    closeNav() {
        // document.getElementById("myNav").style.width = "0%";
        this.opened = false;
    }
}
