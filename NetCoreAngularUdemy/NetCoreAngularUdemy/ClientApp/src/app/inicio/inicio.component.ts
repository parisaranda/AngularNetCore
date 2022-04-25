import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-inicio-component',
  templateUrl: './inicio.component.html'
})

export class InicioComponent {
  constructor(private router: Router) {}
  public Libreria = "Libreria Pepo";

  public Navegar() {
    this.router.navigate(['/cliente'],{ queryParams: {nombre:'juanito', email:'asd'}});
  }
}
