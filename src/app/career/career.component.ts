import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Milestone} from './milestone';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styles: []
})
export class CareerComponent implements OnInit{
  title: string;
  today = new Date();
  careerMilestones: Milestone[] = [
    {
      imageUrl: '../../assets/images/link-pixel-art--level-1.gif',
      role: 'FRONT-END DEVELOPER',
      company: 'Publiwork Digital Marketing',
      startDate: new Date(2014, 1),
      endDate: new Date(2016, 11),
      location: 'São Paulo, Brasil'
    },
    {
      imageUrl: '../../assets/images/link-pixel-art--level-2.gif',
      role: 'FULL-STACK DEVELOPER TEAM LEAD',
      company: 'Publinet 1 Digital Marketing',
      startDate: new Date(2017, 0),
      endDate: new Date(2018, 0),
      location: 'Guarulhos, SP, Brasil'
    },
    {
      imageUrl: '../../assets/images/link-pixel-art--level-3.gif',
      role: 'IT PROJECT MANAGEMENT',
      company: 'Janssen Pharma of Johnson & Johnson',
      startDate: new Date(2018, 1),
      endDate: new Date(2019, 1),
      location: 'São Paulo, Brasil'
    },
    {
      imageUrl: '../../assets/images/link-pixel-art--level-master.gif',
      role: 'SOFTWARE ENGINEER',
      company: 'Poppulo (E-Search DAC)',
      startDate: new Date(2019, 6),
      endDate: this.today,
      location: 'Cork, Ireland'
    },
  ];
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("Career");
    this.title = this.titleService.getTitle();
  }


}
