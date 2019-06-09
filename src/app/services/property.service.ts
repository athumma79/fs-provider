import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController,
  ) {}

  getProviderProperties(provId: number, assign: Function) {
    this.httpClient.get('http://localhost:3000/properties/providers/' + provId).subscribe((response: Array<Property>) => {
      assign(response);
    });
  }

  getPropertyById(id: number, assign: Function) {
    this.httpClient.get("http://localhost:3000/properties/" + id).subscribe((response: Property) => {
      assign(response);
    });
  }

  create(property: Property) {
    this.httpClient.post("http://localhost:3000/properties", property).subscribe(
      (response: Property) => {
        this.navCtrl.navigateBack("main/tabs/listings");
      });
  }

  update(property: Property) {
    this.httpClient.patch("http://localhost:3000/properties", property).subscribe(
      (response: Property) => {
        this.navCtrl.navigateBack("main/tabs/listings/details", {queryParams: {propId: property.id}});
      });
  }

  delete(propId: number) {
    this.httpClient.delete("http://localhost:3000/properties/" + propId).subscribe(
      (response) => {
        this.navCtrl.navigateBack("main/tabs/listings");
      });
  }
}
