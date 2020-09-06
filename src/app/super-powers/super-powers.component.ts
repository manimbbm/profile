import { Component } from '@angular/core';

@Component({
  selector: 'app-super-powers',
  template: `
      <div class="p-5">
<!--        todo draw a badge for each achievement and highlight the number. The details can be toggled on and of (through a modal maybe?)-->
        <p class="text-center title">Welcome to <b>{{ title }}</b> :)</p>
        <p>my hobbies, skills other than work relates</p>
        <p>Unbeatable on Mario Kart Game Cube (throughout my career, was able to dodge over 120 blue shells)</p>
        <p>Have never lost on a short meters running race, except to my father</p>
        <p>20 seconds record on rubiks cube</p>
        <p>2 weeks record on full 0 to hero website development (Loksafe)</p>
        <p>over a thousand commits in a year (try to merge data from gitlab with github</p>
        <p>over 253 marathon problems solved</p>
        <p>wall sit for 187 seconds</p>
        <p>330.6km Kms cycle in a month</p>
        <p>Cycle Distance 1,601.1 km Time 101h 9m Elev Gain 17,371 m Rides 187</p>
        <p>Drew a mushroom from Mario while running</p>
        <p>12000 jigsaw pieces put together</p>
        <p>14500 overall KOs through Smash Bros series (only 100 falls :D)</p>
        <p>1000 hours spent playing electric guitar (thats the only achievement as I'm still hoping to get good at it some day)</p>
      </div>
  `,
  styles: []
})
export class SuperPowersComponent {
  title = 'SuperPowers';
}
