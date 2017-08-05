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
    shippingAddress: Address;
    billingAddress: Address;
    showBillingForm: boolean = false;
    showShippingForm: boolean = false;
    paymentInfo: any;
    
    ngOnInit() {
        this._authSvc.getUser().subscribe(
            (res) => {
               // this.address = res.Adresses as Address[];
                this.shippingAddress = res.Adresses.find(a => a.AddressType == 'Shipping');
                this.billingAddress = res.Adresses.find(a => a.AddressType == 'Billing');
                //this.paymentInfo = res.paymentInfo;
            }
        )
    }

    billingEditClick() {
        this.showBillingForm ? this.showBillingForm = false : this.showBillingForm = true;
    }

    shippingEditClick() {
        this.showShippingForm ? this.showShippingForm = false : this.showShippingForm = true;
    }

}