import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="p-5">
      <h2 class="title text-center">Error 404</h2>
      <p class="text-center">Could not find the requested page 😢</p>
      <p class="text-center"><b>/{{ currUrl }}</b></p>
    </div>
  `
})
export class PageNotFoundComponent {

  constructor(private router: Router) {}

  currUrl = this.router.url.substr(1);
}
