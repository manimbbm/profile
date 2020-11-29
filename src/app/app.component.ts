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
    this.age = this.calcAge();
  }

  calcAge() {
    let today = new Date();
    let age = today.getFullYear() - 1997;
    
    if (today >= new Date(today.getFullYear(), 10, 11)) {
      return age + 1;
    }
    return age;
  }
}
