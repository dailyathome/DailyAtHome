
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../app.settings';



@Injectable()
export class ProductsService {
    constructor(private http: Http) { };

    getCategories() {
        return this.http.get(AppSettings.API_URL+ '/api/header/getCategories').map(
            (response: Response) => response.json()
        );
    }
    getProductsBySubCategory(id: number){
        let params = new URLSearchParams();
        //params.set('ID', id);
        console.log('PRODUCT ID SELECTED IS: ' + id.toString());
        return this.http.get(AppSettings.API_URL + '/api/header/GetProductsBySubCategory/' + id).map(
            (response: Response) => response.json()
        );
    }
    getSubCategoriesByCategoryID(id: number) {

        return this.http.get(AppSettings.API_URL + '/api/header/GetSubcategoriesByCategoryID/' + id).map(
            (response: Response) => response.json()
        );
    }

    getRandomProducts() {
        let params = new URLSearchParams();
        return this.http.get(AppSettings.API_URL + '/api/Home/GetRandomProducts').map(
            (response: Response) => response.json()
        );
    }

    getFeaturedProducts() {
        let params = new URLSearchParams();
        return this.http.get(AppSettings.API_URL + '/api/Home/GetFeaturedProducts').map(
            (response: Response) => response.json()
        );
    }

    getProducts(search: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let params: URLSearchParams = new URLSearchParams();
        params.set('search', search);

        let requestOptions = new RequestOptions();
        requestOptions.search = params;
        requestOptions.headers = headers;

        return this.http.get(AppSettings.API_URL +'/api/Header/GetProducts', requestOptions).map(
            (response: Response) => response.json()
        )
    }

    getProductDetailsById(id: number) {

        return this.http.get(AppSettings.API_URL + '/api/Product/GetProductByID?id=' + id).map(
            (response: Response) => response.json()
        );
    }
}