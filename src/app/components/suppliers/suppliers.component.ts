import { Component, OnInit } from '@angular/core';
import { SupplierData } from './supplier-data.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  supplierName = '';
  suppliers: any;
  edit = false;
  constructor(private supplierService: SupplierData) { }


  ngOnInit(): void {
    this.retrieveSuppliers();
  }

  onClick(post: object) {
    console.log(post);
  }

  retrieveSuppliers(): void {
      this.supplierService.getSuppliers().snapshotChanges().pipe(
        map(supplierData =>
          supplierData.map(key =>
            ({ id: key.payload.key, ...key.payload.val() })
          )
        )
      ).subscribe(data => {
        console.log(data);
        this.suppliers = data;
    });
  }

}
