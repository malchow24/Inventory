import { Component, OnInit } from '@angular/core';
import { SupplierData } from './supplier-data.service';
import { Supplier } from './supplier.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  constructor(private init: SupplierData) { }


  ngOnInit(): void {
    console.log(this.init);
    

  }

}
