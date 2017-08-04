import { Component, OnInit, TemplateRef } from '@angular/core';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { Address } from '../models/address.model';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    constructor(private _authSvc: AuthService) { }
    address: Address[];
    showBillingForm: any[] = [false];
    ngOnInit() {
        this._authSvc.getUser().subscribe(
            (res) => {
                this.address = res.Adresses as Address[];
                if (this.address.length == 0) {
                    this.address = [{
                        id: null,
                        stretAddress: null,
                        city: null,
                        state: null,
                        zip: null,
                        country: null,
                        addressType: 'Shipping'
                    }, {
                        id: '',
                        stretAddress: '',
                        city: '',
                        state: '',
                        zip: '',
                        country: '',
                        addressType: 'Billing'
                        }];                   
                }
            }
        )
    }

    billingEdit(i) {
        this.showBillingForm[i] ? this.showBillingForm[i] = false : this.showBillingForm[i] = true;
    }

    saveAddress(a) {

    }
}