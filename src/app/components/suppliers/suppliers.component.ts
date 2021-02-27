import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SupplierData } from './supplier-data.service';
import { Supplier } from './supplier.model';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  loadedPosts = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;
  constructor(private http: HttpClient, private supplierService: SupplierData) { }


  ngOnInit(): void {
    this.errorSub = this.supplierService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });


    this.isFetching = true;
    this.supplierService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    },
    error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
      
    });

  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.supplierService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
      console.log(posts);
      
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
      
    });
  }

}
