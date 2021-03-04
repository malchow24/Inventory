import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {
  currentPost: object;

  constructor() { }

  ngOnInit(): void {
  }

}
