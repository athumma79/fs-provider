import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../models/property.model';
import { PropertyService } from '../services/property.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public property: Property = new Property();
  public propId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private propertyService: PropertyService
  ) {
    this.activatedRoute.queryParamMap.subscribe((data: any) => {
      this.propId = data.params.propId;
      this.propertyService.getPropertyById(this.propId, (res) => {
        this.property = res;
      });
    });
  }

  edit() {
    this.navCtrl.navigateForward("edit", {queryParams: {propId: this.propId}});
  }

  bookings() {
    this.navCtrl.navigateForward("bookings", {queryParams: {propId: this.propId}});
  }

  ngOnInit() {
  }

}
