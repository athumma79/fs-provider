import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Provider } from '../models/provider.model';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  public provider: Provider = new Provider();

  constructor(private providerService: ProviderService) {
    const id = parseInt(localStorage.getItem("provId"));
    this.providerService.getProviderById(id, (res) => {
      this.provider = res;
    });
  }

}
