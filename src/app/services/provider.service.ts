import { Injectable } from '@angular/core';
import { Provider } from '../models/provider.model';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(
    private httpClient: HttpClient,
    public navCtrl: NavController,
    public alertController: AlertController
  ) { }

  register(provider: Provider) {
    this.httpClient.post("http://localhost:3000/providers", provider).subscribe(
      (response: Provider) => {
        localStorage.setItem("provId", response.id.toString(10));
        this.navCtrl.navigateForward("main/tabs/listings");
      },
      async (err) => {
        const alert = await this.alertController.create({
          message: err.error.message,
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

  login(provider: Provider) {
    this.httpClient.post("http://localhost:3000/providers/authentication", provider).subscribe(
      (response: Provider) => {
        localStorage.setItem("provId", response.id.toString(10));
        this.navCtrl.navigateForward("main/tabs/listings");
      },
      async (err) => {
        const alert = await this.alertController.create({
          message: err.error.message,
          buttons: ['OK']
        });
        await alert.present();
      }
    );
  }

  getProviderById(id: number, assign: Function) {
    this.httpClient.get("http://localhost:3000/providers/" + id).subscribe((response: Provider) => {
      assign(response);
    });
  }

}
