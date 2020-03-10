import { Component } from '@angular/core';

@Component({
  selector: 'app-power-ups',
  template: `
      <app-top-bar></app-top-bar>
      <div class="p-5">
          <p class="text-center title">Welcome to <b>{{ title }}</b> :)</p>
      </div>
  `,
  styles: []
})
export class PowerUpsComponent {
  title = 'Power Ups';
}