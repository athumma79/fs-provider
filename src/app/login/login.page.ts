import { Component, OnInit } from '@angular/core';
import { Provider } from '../models/provider.model';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public provider: Provider = new Provider();

  constructor(private providerService: ProviderService) {}

  login() {
    this.providerService.login(this.provider);
  }

  ngOnInit() {
  }

}
