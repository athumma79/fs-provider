import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Provider } from '../models/provider.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  public provider: Provider = new Provider();

  constructor(private providerService: ProviderService) { }

  register() {
    this.providerService.register(this.provider);
  }

  ngOnInit() {
  }

}
