import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'manimbbm';
  age: number;
  imageUrl: FormControl = new FormControl('https://lh3.googleusercontent.com/JU6WOweR2L3PUM47bubwdVBM98wqMITr3bPKFK6bYlCFQteh_FlBNTvClj8Cefj82gW9BXHz-fttRbr7uSyrOD-JnZupLx0L3PkLnN4YhvMopEHMFikqUXZ9rr25b0s0xSVjNws4nl_Shqm0B2v3QR2MZc9Kfa73gGmSFaU_tHlQCwSdM_Iwq_8RQkDfq4cviCnC_q_4cw_iiP7H4o8y5_qT7xTcytzFrtzredQkrwpF2PgbGTQQ1y_A8BxDHC8sPp6PNtmHx_tIrrD6EXb-uxG2tqekEIFWSsvormu8jF1HNqr7vCWThTumUs7tUUpIxcw6SGflKYZBs1J5uPPCqTmUyuDoOa1_N45gH2-H0VFpIQIfYuVqQ_j7cQ9d1sci5hUos3QAgdy8PxJUvc9m-Ipz6FWJQWDL5WlXJX2mxRW_H_CdstjhiNxoRLDXcBkM9u_ec2j5h08FwO0BZ0uW0HcKrESOWVEAmu51KkOpMr3-58nZonJy_h22EoRUYj9EI-byetS2IUsRcBbKrIcqEYZQPVv5Ke-VdYN5FsoPv_g978bHgkOtcJ96sHZfEoJwKQcZzeVO6pgm-ysA7WVrInIYHWwI9ijCjJdbGJ999uEEvH1TDo3gTEJpU4iThY-EG2P6rjxxisnDrnXuOhXZehZzPwuiG9ZWz-nB8wdaprOC4-ZfKaimfZIgM0mfxDc=w949-h971-no?authuser=0', [Validators.required, this.isHttps]);

  ngOnInit() {
    this.age = AppComponent.calcAge();
  }

  isHttps(control: FormControl) {
    if (control.value && control.value.indexOf('https') === 0) {
      return null;
    } else {
      return {'isHttps': 'Its not https'}
    }
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
