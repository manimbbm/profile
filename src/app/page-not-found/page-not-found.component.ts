import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `
      <div class="p-5">
        <p class="text-center title">Error 404: Couldn't find any "{{ curUrl }}" page :(</p>
      </div>
  `,
  styles: []
})
export class PageNotFoundComponent {

  constructor(private router: Router) {}

  curUrl = this.router.url.substr(1);
}
