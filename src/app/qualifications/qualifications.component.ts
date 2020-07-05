import { Component } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  template: `
      <div class="p-5">
          <p class="text-center title">Welcome to <b>{{ title }}</b> :)</p>
      </div>
  `,
  styles: []
})
export class QualificationsComponent {
  title = 'Qualifications';
}
