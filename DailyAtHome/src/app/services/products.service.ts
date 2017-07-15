import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
    constructor(private http: Http) { };

    getCategories() {
        return this.http.get('http://localhost:56259/api/header/getCategories').map(
            (response:Response) => response.json()
        );
    }
}