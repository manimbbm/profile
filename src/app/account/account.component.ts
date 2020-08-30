import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  template: `
      <div class="p-5">
          <p class="text-center title">Welcome to <b>{{ title }}</b> :)</p>
      </div>
  `,
  styles: []
})
export class AccountComponent {
  title = 'Account';
}
