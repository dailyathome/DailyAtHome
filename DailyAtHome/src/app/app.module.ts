import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {CartComponent } from './cart/cart.component';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CartService } from '../app/services/cart.service';

@NgModule({
    imports: [BrowserModule,FormsModule, AppRoutingModule, HttpModule],
    declarations: [AppComponent, HeaderComponent, CartComponent, routingComponents],
    bootstrap: [AppComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, CartService],
})
export class AppModule { }
