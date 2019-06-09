import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property.model';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public property: Property = new Property();
  public propId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService
  ) {
    this.activatedRoute.queryParamMap.subscribe((data: any) => {
      this.propId = data.params.propId;
      this.propertyService.getPropertyById(this.propId, (res) => {
        this.property = res;
      });
    });
  }

  update() {
    this.propertyService.update(this.property);
  }

  delete() {
    this.propertyService.delete(this.propId);
  }

  ngOnInit() {
  }

}
