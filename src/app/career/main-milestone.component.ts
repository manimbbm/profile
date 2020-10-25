import {Component, OnInit} from '@angular/core';
import {faCalendarAlt, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import carousel from 'bootstrap';

@Component({
  selector: 'main-milestone',
  templateUrl: './main-milestone.component.html',
  styles: [`
    .milestone {
        background: #eee;
        border: 1px solid #dddddd;
    }

    .image{
      border:7px solid #555;
      width: 70px;
      height: 70px;
      border-radius: 100%;
    }
  `]
})

export class MainMilestoneComponent implements OnInit{
  faCalendarAlt = faCalendarAlt;
  faLocationArrow = faLocationArrow;
  today = this.todayReadable();
  milestones = [
    {
      imageUrl: '../assets/images/link-pixel-art--level-master.gif',
      role: 'SOFTWARE ENGINEER',
      company: 'Poppulo (E-Search DAC)',
      startDate: new Date(2019, 6),
      endDate: this.today,
      location: 'Cork, Ireland'
    },
    {
      imageUrl: '../assets/images/link-pixel-art--level-3.gif',
      role: 'IT PROJECT MANAGEMENT',
      company: 'Janssen Pharma of Johnson & Johnson',
      startDate: new Date(2018, 1),
      endDate: new Date(2019, 1),
      location: 'São Paulo, Brasil'
    },
    {
      imageUrl: '../assets/images/link-pixel-art--level-2.gif',
      role: 'FULL-STACK DEVELOPER TEAM LEAD',
      company: 'Publinet 1 Digital Marketing',
      startDate: new Date(2017, 0),
      endDate: new Date(2018, 0),
      location: 'Guarulhos, SP, Brasil'
    },
    {
      imageUrl: '../assets/images/link-pixel-art--level-1.gif',
      role: 'FRONT-END DEVELOPER',
      company: 'Publiwork Digital Marketing',
      startDate: new Date(2014, 1),
      endDate: new Date(2016, 11),
      location: 'São Paulo, Brasil'
    }
  ];

  ngOnInit() {
    this.initCarousel();
  }

  todayReadable(){
    let today = new Date();
    return `${today.getFullYear} ${today.getMonth} ${today.getDate}`;
  }

  getHistoricalMilestonesOrder() {
    return this.milestones.sort((a, b) => +a.startDate - +b.startDate );
  }

  initCarousel(){
    $('.carousel').carousel({
      wrap: false,
      interval: 4500
    });
  }
}
