
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Supplier } from "./supplier.model";
import { catchError, map } from "rxjs/operators";
import { Subject } from "rxjs";
import { throwError } from "rxjs/internal/observable/throwError";


@Injectable({
    providedIn: 'root'
})

export class SupplierData {
    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    fetchPosts() {
        return this.http
        .get<{[key: string]: Supplier}>('https://inventory-management-83f99-default-rtdb.firebaseio.com/suppliers.json',
        )
        .pipe(
            map(responseData => {
                const postsArray: Supplier[] = [];
                for(const key in responseData) {
                    if(responseData.hasOwnProperty(key)) {
                        postsArray.push({...responseData[key], id: key })
                    }
                }
                return postsArray;
            }),
            catchError(errorRes => {
                // send to analytics server
                return throwError(errorRes);
            })
        );
    }

}