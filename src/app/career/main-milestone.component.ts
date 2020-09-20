import {Component} from '@angular/core';
import {faCalendarAlt, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'main-milestone',
  template: `
    <div>
      <p></p>
      <p>Backlog owner of their main project, being responsible for requirement analysis and for leading an Indian development team to
        overcome any technical limitations</p> during a Scrum development life cycle.
      <p>Implemented core code features</p>
      <p>Shared learnings cross department</p>
      <p>Collected and Discussed customer feedback</p>
      <p>Contributed for mobile responsiveness</p>
      <p>Improved Image Editor</p>
      <p>Engaged on a new project to expand the company's customer base, focusing on core product value exposed through an intuitive UI for
        more casual users.</p>
      <p>Net Promoter Score improvements</p>
      <p>As a team player collaborated on product decisions</p>
      <p>Code review</p>
      <p>Department planning</p>
      <div class="d-flex milestone rounded p-3">
        <div class="image-container text-center col-3">
          <div class="align-self-center">
            <!--todo align content center-->
            <div class="image d-flex m-auto"><img src="../assets/images/link-pixel-art.gif" class="h-75 m-auto align-content-center" alt=""></div>
            <!--<p class="figure-caption">Simple metal shield<br> + Simple metal sword</p>-->
          </div>

        </div>
        <div class="col-9 float-right align-middle">
          <div class="title"><h3 class="mat-card-header">SOFTWARE ENGINEER - Poppulo (E-Search DAC)</h3></div>
          <div class="date"><p><fa-icon [icon]="faCalendarAlt"></fa-icon> Jul/2019 - Present - <fa-icon [icon]="faLocationArrow"></fa-icon> Cork, Ireland</p></div>
          <div class="description"></div>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .milestone {
        background: #eee;
        border: 1px solid #dddddd;
    }

    .image{
      border:5px solid #555;
      width: 50px;
      height: 50px;
      border-radius: 100%;
    }
  `]
})

export class MainMilestoneComponent {
  faCalendarAlt = faCalendarAlt;
  faLocationArrow = faLocationArrow;
}
