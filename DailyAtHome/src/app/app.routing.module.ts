import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../app/products/products.component';
import { LoginComponent } from '../app/account/login.component';

const routes: Routes = [
    { path: 'products/:id', component: ProductsComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'register', component: RegisterComponent },
    // { path: 'products/:id', component: ProductsComponent },
    //{ path: 'home', component: AppComponent },
    {
       path: '',
        redirectTo: 'login',
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
export const routingComponents = [ProductsComponent, LoginComponent]