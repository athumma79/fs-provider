import { Component } from '@angular/core';
import { Property } from '../models/property.model';
import { PropertyService } from '../services/property.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listings',
  templateUrl: 'listings.page.html',
  styleUrls: ['listings.page.scss']
})
export class ListingsPage {

  public properties: Array<Property> = new Array();

  constructor(
    private propertyService: PropertyService,
    private navCtrl: NavController) {}

  ionViewWillEnter() {
    const provId = parseInt(localStorage.getItem("provId"));
    this.propertyService.getProviderProperties(provId, (res) => {
      this.properties = res;
    });
  }

  details(id: number) {
    this.navCtrl.navigateForward("main/tabs/listings/details", { queryParams: { propId: id } });
  }

  create() {
    this.navCtrl.navigateForward("main/tabs/listings/create");
  }

}
