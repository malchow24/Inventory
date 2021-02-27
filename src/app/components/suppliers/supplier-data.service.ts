
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Supplier } from "./supplier.model";
import { catchError, map } from "rxjs/operators";
import { throwError } from "rxjs/internal/observable/throwError";


@Injectable({
    providedIn: 'root'
})

export class SupplierData {

    constructor(private http: HttpClient) {}

    fetchPosts() {
        this.http
        .get<{[key: number]: Supplier}>('https://inventory-management-83f99-default-rtdb.firebaseio.com/suppliers.json',
        )
        .pipe(
            map(responseData => {
                console.log(responseData);
            }),
        );
    }

}