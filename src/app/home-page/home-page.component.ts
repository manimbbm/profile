import {Component} from '@angular/core';

@Component ({
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html',
    styleUrls: ['home-page.component.css']
})

export class HomePageComponent {
  title = 'Portfolio - Bruno Marques';
  age = new Date().getFullYear() - 1997;
}