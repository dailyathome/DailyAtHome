import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address } from '../models/address.model';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'profile',
    templateUrl: 'app/account/profile.component.html'
})
export class ProfileComponent implements OnInit {
    constructor(private _authSvc: AuthService, private _formBuilder: FormBuilder) { }
    address: Address[];
    showBillingForm: any[] = [false];
    ngOnInit() {
        this._authSvc.getUser().subscribe(
            (res) => {
                this.address = res.Adresses;
            }
        )
    }

    billingEdit(i) {
        this.showBillingForm[i] ? this.showBillingForm[i] = false : this.showBillingForm[i] = true;
    }

}