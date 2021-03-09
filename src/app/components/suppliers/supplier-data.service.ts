import { Injectable } from "@angular/core";
import { Supplier } from "./supplier.model";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";


@Injectable({
    providedIn: 'root'
})

export class SupplierData {
    suppliers: AngularFireList<Supplier> = null;
    private dbPath = '/suppliers';

    constructor(db: AngularFireDatabase) {
        this.suppliers = db.list(this.dbPath);
    }

    getSuppliers(): AngularFireList<Supplier> {        
        return this.suppliers;
    }
    
}