import { Component, OnInit } from '@angular/core';
import { Part } from './parts.model';
import { PartsData } from './parts.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  parts: Part[];

  constructor(private partsService: PartsData) { }

  ngOnInit(): void {
    this.parts = this.partsService.parts;
  }

}
