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
    private alertController: AlertController
  ) { }

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
      async (response: Property) => {
        const alert = await this.alertController.create({
          message: "your property has been successfully created",
          buttons: ['OK']
        });
        await alert.present();
        this.navCtrl.navigateForward("main/tabs/listings");
      });
  }

  update(property: Property) {
    this.httpClient.patch("http://localhost:3000/properties", property).subscribe(
      async (response: Property) => {
        const alert = await this.alertController.create({
          message: "your property has been successfully updated",
          buttons: ['OK']
        });
        await alert.present();
        this.navCtrl.navigateForward("details", {queryParams: {propId: property.id}});
      });
  }

  delete(propId: number) {
    this.httpClient.delete("http://localhost:3000/properties/" + propId).subscribe(
      async (response) => {
        const alert = await this.alertController.create({
          message: "your property has been successfully deleted",
          buttons: ['OK']
        });
        await alert.present();
        this.navCtrl.navigateForward("main/tabs/listings");
      });
  }
}
