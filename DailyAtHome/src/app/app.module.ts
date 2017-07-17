import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

const dahRoutes: Routes = [

    { path: 'products/:id', component: ProductsComponent },
    //{ path: 'register', component: RegisterComponent },
    // { path: 'products/:id', component: ProductsComponent },
    //{ path: 'home', component: AppComponent },
    //{
    //    path: '',
    //    redirectTo: '/home',
    //    pathMatch: 'full'
    //}
]

@NgModule({
    imports: [RouterModule.forRoot(dahRoutes, {
        enableTracing:true,
        useHash:true
    }), BrowserModule, HttpModule],
    declarations: [AppComponent, HeaderComponent, ProductsComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
