import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppSettings } from '../app.settings';


@Injectable()
export class AdminService {
    constructor(private http: Http) { };

    UpdateCategory(category) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(AppSettings.API_URL + '/api/admin/UpdateCategory', JSON.stringify(category), options)
            .map((response: Response) => response);
    }

    UpdateSubCategory(subCategory) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(AppSettings.API_URL + '/api/admin/UpdateSubCategory', JSON.stringify(subCategory), options)
            .map((response: Response) => response);
    }

    AddCategory(category) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(AppSettings.API_URL + '/api/admin/AddCategory', JSON.stringify(category), options)
            .map((response: Response) => response);
    }

    AddSubCategory(subCategoryItem) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(AppSettings.API_URL + '/api/admin/AddSubCategory', JSON.stringify(subCategoryItem), options)
            .map((response: Response) => response);
    }

    UpdateProduct(Product) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(AppSettings.API_URL + '/api/admin/UpdateProduct', JSON.stringify(Product), options)
            .map((response: Response) => response);
    }
}