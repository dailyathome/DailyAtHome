
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
        params.set('ID', id.toString());
        return this.http.get(AppSettings.API_URL + '/api/header/GetProductsBySubCategory', { search: params }).map(
            (response: Response) => response.json()
        );
    }
}