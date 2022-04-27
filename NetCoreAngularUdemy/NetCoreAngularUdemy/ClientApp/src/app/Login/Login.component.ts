import { Component } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-Login-component',
  templateUrl: './Login.component.html'
})

export class LoginComponent {
  constructor(private api: ClienteService)
  {
    api.dameclientes().subscribe(res => { console.log(res) });
  }

}
