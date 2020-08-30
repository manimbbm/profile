import { Component } from '@angular/core';

@Component({
  selector: 'app-power-ups',
  template: `
      <div class="p-5">
          <p class="text-center title">Welcome to <b>{{ title }}</b> :)</p>
          <p>tools I use to help me be achieve what I want</p>
      </div>
  `,
  styles: []
})
export class PowerUpsComponent {
  title = 'Power Ups';
}
