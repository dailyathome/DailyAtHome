import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component';
//import { } from '../app/products/products.component'
import { CartComponent } from '../app/cart/cart.component'
import { Subscription } from 'rxjs/Subscription';
import { SpinnerService } from '../app/services/spinner.service';
import { SpinnerComponent } from '../app/spinner/spinner.component';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    displaySpinner: boolean;
    spinnerSubscription: Subscription;
    constructor(private spinnerService: SpinnerService) { }

    ngOnInit() {
        this.spinnerSubscription = this.spinnerService.spinnerCounter.subscribe((counter: number) => {
            this.displaySpinner = counter != 0;
        });
    }

    ngOnDestroy() {
        this.spinnerSubscription.unsubscribe();
    }
}
