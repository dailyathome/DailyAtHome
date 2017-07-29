import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../app/products/products.component';
import { LoginComponent } from '../app/account/login.component';
import { RegisterComponent } from '../app/account/register.component';
import { CartSummaryComponent } from '../app/cart/cart-summary.component';
import { HomeComponent } from '../app/home/home.component';
import { AdminComponent } from '../app/admin/admin.component';
import { LogoutComponent } from '../app/account/logout.component';
import { AuthGuard } from '../app/utility/utility.auth-guard';


const routes: Routes = [
    { path: 'products/:id', component: ProductsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart-summary', component: CartSummaryComponent },
    { path: 'home', component: HomeComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    // { path: 'products/:id', component: ProductsComponent },
    //{ path: 'home', component: AppComponent },
    {
       path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent, LoginComponent, LogoutComponent, RegisterComponent, CartSummaryComponent, HomeComponent, AdminComponent]
export const providers = AuthGuard;