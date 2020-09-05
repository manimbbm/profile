import {Component} from '@angular/core';

@Component ({
    selector: 'app-home-page',
    templateUrl: 'home-page.component.html',
    styleUrls: ['home-page.component.scss']
})

export class HomePageComponent {
  title = 'Portfolio - Bruno Marques';
  data = [
    {
      title: 'Sobre',
      summary: 'Me divirto com áreas inusitadas, coisas criativas, desafios de raciocínio lógico, jogos, com os mares da imaginação. Procuro dar o meu melhor em tudo que faço, buscando surpreender, inovar e ser único em qualquer seção da vida.'
    },
    {
      title: 'About',
      summary: 'I usually spend my free time with exotic things, creative ones, logical reasoning challenges, games, and with the seas of imagination. I try to give my best on everything I do, trying to surprise people, innovate, and be unique in any life\'s section.'
    }
  ]
}
