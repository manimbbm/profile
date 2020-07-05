import { Component } from '@angular/core';

@Component({
  selector: 'app-super-powers',
  template: `
      <div class="p-5">
          <p class="text-center title">Welcome to <b>{{ title }}</b> :)</p>
      </div>
  `,
  styles: []
})
export class SuperPowersComponent {
  title = 'SuperPowers';
}
