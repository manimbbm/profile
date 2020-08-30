import {Component} from '@angular/core';
import { faFacebook, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component ({
    selector: 'app-top-bar',
    templateUrl: 'top-bar.component.html',
    styleUrls: ['top-bar.component.scss']
})

export class TopBarComponent {
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faWhatsapp = faWhatsapp;
}
