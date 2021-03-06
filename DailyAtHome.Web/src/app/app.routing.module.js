"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_component_1 = require("../app/products/products.component");
var login_component_1 = require("../app/account/login.component");
var register_component_1 = require("../app/account/register.component");
var cart_summary_component_1 = require("../app/cart/cart-summary.component");
var home_component_1 = require("../app/home/home.component");
var admin_component_1 = require("../app/admin/admin.component");
var logout_component_1 = require("../app/account/logout.component");
var profile_component_1 = require("../app/account/profile.component");
var utility_auth_guard_1 = require("../app/utility/utility.auth-guard");
var spinner_component_1 = require("../app/spinner/spinner.component");
var routes = [
    { path: 'products/:id', component: products_component_1.ProductsComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'cart-summary', component: cart_summary_component_1.CartSummaryComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: 'admin', component: admin_component_1.AdminComponent, canActivate: [utility_auth_guard_1.AuthGuard] },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent, canActivate: [utility_auth_guard_1.AuthGuard] },
    { path: 'spinner', component: spinner_component_1.SpinnerComponent },
    // { path: 'products/:id', component: ProductsComponent },
    //{ path: 'home', component: AppComponent },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: false })],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [products_component_1.ProductsComponent, login_component_1.LoginComponent, logout_component_1.LogoutComponent, profile_component_1.ProfileComponent, register_component_1.RegisterComponent, cart_summary_component_1.CartSummaryComponent, home_component_1.HomeComponent, admin_component_1.AdminComponent];
exports.providers = utility_auth_guard_1.AuthGuard;
//# sourceMappingURL=app.routing.module.js.map