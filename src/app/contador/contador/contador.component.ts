import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>

    <span> {{ number }} </span>

    <button (click)="acumular(-base)">- {{ base }}</button>

    <!-- parentesis son eventos -->
  `,
})
export class ContadorComponent {
  title: string = 'app-contador';
  number: number = 10;
  base: number = 5;

  // sumar() {
  //   this.number += 1;
  // }
  // restar() {
  //   this.number -= 1;
  // }

  acumular(valor: number) {
    this.number += valor;
  }
}

// {
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// }
