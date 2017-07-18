import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../app/products/products.component';

const routes: Routes = [
    { path: 'products/:id', component: ProductsComponent },
    //{ path: 'register', component: RegisterComponent },
    // { path: 'products/:id', component: ProductsComponent },
    //{ path: 'home', component: AppComponent },
    //{
    //    path: '',
    //    redirectTo: '/home',
    //    pathMatch: 'full'
    //}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent]