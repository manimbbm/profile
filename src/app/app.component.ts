import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'manimbbm';
  age: number;

  ngOnInit() {
    this.age = AppComponent.calcAge();
  }

  private static calcAge() {
    let today = new Date();
    let age = today.getFullYear() - 1997;
    if (today.getDate() >= 11 && today.getMonth() >= 11) {
      return age++;
    }
    return age;
  }
}
