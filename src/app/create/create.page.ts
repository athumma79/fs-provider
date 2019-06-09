import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyService } from '../services/property.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public property: Property = new Property();

  constructor(private propertyService: PropertyService) {
    this.property.providerId = parseInt(localStorage.getItem("provId"));
  }

  create() {
    this.propertyService.create(this.property);
  }

  ngOnInit() {
  }

}
