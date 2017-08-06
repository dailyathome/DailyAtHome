import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address } from '../models/address.model';
import { AuthService } from '../services/auth.service';
import { Calander } from '../utility/utility.calander';
import { CreditCardIdentifier } from '../utility/utility.credit-card-identifier';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    constructor(private _authSvc: AuthService, private _formBuilder: FormBuilder) { }
    address: Address[];
    shippingAddress: any;
    billingAddress: any;
    showBillingForm: boolean = false;
    showShippingForm: boolean = false;
    paymentInfo: any;
    years: number[];
    months: any[];
    cardType: string = '';

    shippingForm: FormGroup;
    billingForm: FormGroup;

    ngOnInit() {
        this._authSvc.getUser().subscribe(
            (res) => {
                // this.address = res.Adresses as Address[];
                this.shippingAddress = res.Adresses.find(a => a.AddressType == 'Shipping')
                this.billingAddress = res.Adresses.find(a => a.AddressType == 'Billing')
                this.paymentInfo = res.PaymentInfo;
                this.cardType = res.PaymentInfo.PaymentType ? res.PaymentInfo.PaymentType.toLowerCase() : '';
                this.shippingForm = this._formBuilder.group({
                    streetAddress: [this.shippingAddress ? this.shippingAddress.StreetAddress : null],
                    city: [this.shippingAddress ? this.shippingAddress.City : null],
                    state: [this.shippingAddress ? this.shippingAddress.State : null],
                    zip: [this.shippingAddress ? this.shippingAddress.Zip : null],
                    country: [this.shippingAddress ? this.shippingAddress.Country : null],
                    id: [this.shippingAddress ? this.shippingAddress.ID : null]  
                });
                this.billingForm = this._formBuilder.group({
                    streetAddress: [this.billingAddress ? this.billingAddress.StreetAddress : null],
                    city: [this.billingAddress ? this.billingAddress.City : null],
                    state: [this.billingAddress ? this.billingAddress.State : null],
                    zip: [this.billingAddress ? this.billingAddress.Zip : null],
                    country: [this.billingAddress ? this.billingAddress.Country : null],
                    id: [this.billingAddress ? this.billingAddress.ID : null],
                    paymentType: [this.billingAddress ? this.paymentInfo.PaymentType : null],
                    cardNumber: [this.billingAddress ? this.paymentInfo.CardNumber : null],
                    cvcCode: [this.billingAddress ? this.paymentInfo.CvcCode : null],
                    expirationMonth: [this.billingAddress ? this.paymentInfo.ExpirationMonth : Calander.getMonth()],
                    expirationYear: [this.billingAddress ? this.paymentInfo.ExpirationYear : Calander.getCurrentYear()],
                    nameOnCard: [this.billingAddress ? this.paymentInfo.NameOnCard : null]
                });

                if (!this.shippingAddress) {
                    this.showShippingForm = true;
                } else this.showShippingForm = false;

                if (!this.billingAddress) this.showBillingForm = true; else this.showBillingForm = false;
            }
        )

        this.years = Calander.getNextNYears(20);
        this.months = Calander.months;
    }

    billingEditClick() {
        this.showBillingForm ? this.showBillingForm = false : this.showBillingForm = true;
    }

    shippingEditClick() {
        this.showShippingForm ? this.showShippingForm = false : this.showShippingForm = true;
    }


    getCardType(num: number) {
        try {
            if (num.toString().length > 5) {
                this.cardType = CreditCardIdentifier.GetCardType(num.toString());
            } else {
                this.cardType = '';
            }
        }
        catch (e) {
            this.cardType = '';
        }
    }
}