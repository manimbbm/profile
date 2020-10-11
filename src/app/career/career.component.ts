import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styles: []
})
export class CareerComponent implements OnInit{
  title: string;

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("Career");
    this.title = this.titleService.getTitle();
  }


}
