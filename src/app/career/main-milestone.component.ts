import {Component, OnInit, ViewChild} from '@angular/core';
import {faCalendarAlt, faLocationArrow} from '@fortawesome/free-solid-svg-icons';
import $ from 'jQuery';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'main-milestone',
  templateUrl: './main-milestone.component.html',
  styles: [`
    .carousel-caption {
      bottom: initial !important;
    }

    .milestone {
      height: 190px;
      background: #eee;
      border: 1px solid #dddddd;
    }

    .milestone * {
      color: #555555;
    }

    .image{
      border:7px solid #555;
      width: 70px;
      height: 70px;
      border-radius: 100%;
    }

    // todo get the styles bellow to work
    .carousel-indicators li, .carousel-control-next, .carousel-control-prev{
      background-color: black;
    }

    .carousel-control-prev-icon {
      background-image: url(/assets/images/previous.svg) !important;
    }
  `]
})

export class MainMilestoneComponent implements OnInit{
  faCalendarAlt = faCalendarAlt;
  faLocationArrow = faLocationArrow;
  today = this.getTodayReadable();
  milestones = [
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
  @ViewChild('carousel', {static : true}) ngbCarousel: NgbCarousel;


  constructor() {}

  ngOnInit() {  
    this.ngbCarousel.activeId = `${this.milestones.length - 1}`;
  }
  
  getTodayReadable(){
    let today = new Date();
    return `${today.getFullYear} ${today.getMonth} ${today.getDate}`;
  }

  getHistoricalMilestonesOrder() {
    return this.milestones.sort((a, b) => +a.startDate - +b.startDate );
  }

  toggleArrows( event: NgbSlideEvent ) {
    const curr = +event.current;
    switch (curr) {
      case 0: {
        $('.carousel-control-next').fadeIn();
        $('.carousel-control-prev').fadeOut();
        break;
      }
      case this.milestones.length - 1: {
        $('.carousel-control-prev').fadeIn();
        $('.carousel-control-next').fadeOut();
        break;
      }
      default: {
        $('.carousel-control-next').fadeIn();
        $('.carousel-control-prev').fadeIn();
        break;
      }
    }
  }

  pauseCarousel(){
    this.ngbCarousel.pause();
  }

  cycleCarousel(){
    this.ngbCarousel.cycle();
  }
}
