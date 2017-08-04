"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var cart_component_1 = require("./cart/cart.component");
var admcategory_component_1 = require("./admin/categories/admcategory.component");
var admsubcategory_component_1 = require("./admin/subcategories/admsubcategory.component");
var app_routing_module_1 = require("./app.routing.module");
var cart_service_1 = require("../app/services/cart.service");
var auth_service_1 = require("../app/services/auth.service");
var ng2_imageupload_1 = require("ng2-imageupload");
var admproduct_component_1 = require("../app/admin/Products/admproduct.component");
var spinner_component_1 = require("../app/spinner/spinner.component");
var spinner_service_1 = require("../app/services/spinner.service");
//import { ReactiveFormsModule } from '@angular/forms';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, ng2_imageupload_1.ImageUploadModule],
            declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, cart_component_1.CartComponent, admcategory_component_1.AdmCategoryComponent, admsubcategory_component_1.AdmSubCategoryComponent, spinner_component_1.SpinnerComponent, app_routing_module_1.routingComponents, admproduct_component_1.AdmProductComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [cart_service_1.CartService, auth_service_1.AuthService, spinner_service_1.SpinnerService, app_routing_module_1.providers],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map