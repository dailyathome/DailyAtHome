import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, HttpModule],
    declarations: [AppComponent, HeaderComponent, routingComponents],
    bootstrap: [AppComponent],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppModule { }
