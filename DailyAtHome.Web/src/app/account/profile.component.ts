import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address } from '../models/address.model';
import { AuthService } from '../services/auth.service';
import { Calander } from '../utility/utility.calander';
import { CreditCardIdentifier } from '../utility/utility.credit-card-identifier';
import { SpinnerService } from '../services/spinner.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    public resultModal: BsModalRef;
    public resultModelOptions = new ModalOptions();
    resultMsg: string = '';
    constructor(private _authSvc: AuthService, private _formBuilder: FormBuilder, private _spinnerSvc: SpinnerService, private modalService: BsModalService) { }
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

        this.getUser();

        this.years = Calander.getNextNYears(20);
        this.months = Calander.months;
    }
    getUser() {
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
                    id: [this.shippingAddress ? this.shippingAddress.ID : null],
                    addressType: ['Shipping']
                });
                this.billingForm = this._formBuilder.group({
                    addressType: ['Billing'],
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

    saveShipping(template: TemplateRef<any>) {
        if (this.shippingForm.valid) {
            this._spinnerSvc.displaySpinner(true);
            this._authSvc.saveShippingAddress(this.shippingForm.value).subscribe(
                (res) => {
                    this._spinnerSvc.displaySpinner(false);
                    this.shippingAddress = res.addresses;
                    console.log(res);
                    this.showShippingForm = false;
                    this.resultMsg = res.message;
                    //var options = new ModalOptions();
                   this.resultModelOptions.animated = true;
                   this.resultModelOptions.class = 'text-success';
                   this.resultModal = this.modalService.show(template, this.resultModelOptions)
                },
                error => {
                    this._spinnerSvc.displaySpinner(false);
                    this.resultMsg = 'Something went wrong. Please try again';
                    this.resultModelOptions.class = 'text-danger';
                    this.resultModal = this.modalService.show(template, this.resultModelOptions);
                }
            )
        }
    }
}