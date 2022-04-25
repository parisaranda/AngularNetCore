import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cliente-component',
  templateUrl: './cliente.component.html'
})

export class ClienteComponent {
  @Input() nombre: string;
  @Input() email: string;

  nombreQueryString: string;
  emailQueryString: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.nombreQueryString = params['nombre'];
      this.emailQueryString = params['email'];
    })
  }

  public Alta() {

  }
}
