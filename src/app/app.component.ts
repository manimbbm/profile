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
  imageUrl: FormControl = new FormControl('https://lh3.googleusercontent.com/fife/ABSRlIovxVZDU8ojGxBhc4Oj9BvfAvd_Q2dZwh9NF6b6cSzwjaomSxvjJKHgWQBiueOvrSk4FwwFN7Vv6r4KbT_SckZgXNV_i34btrGNQnk3Eo-_VAOyO5oRwupZK-1-JeiexTNGe1kdwoED5B7y44DDWMsPOyFn4Jdlte1ILX5acGjWSt7_PdosojfJjaSx3X_JZX5Jjl35-wLQNdIhXlKmPC_uCHJZPvAmKewfOVMwyNmIIe3BDOGps3MoW2aXUxPBj9FDkIpo_7_nwpv8qSYK-uIpIxzQHh1kDFHwkmJM0XYCBibHk3tob53NRlSLPGRlJCsmn-5jXv42wbX8Amt7PJ0t71uAZovZ-3qhIZf0Eq96DtblVPjhuRyLRhFsUZPk4PROjCz1hHC2sQC41ZwPPc3l0Evu-6iwG5PGWKhElI_dNLpgp9Cl-JPpfIzzbzrVBhdfFeKVt4irBIg7mkU0c7KX3PqtFCyTrK0yX67iJl-Vxkcc5rkenFHccYj3aLDjcxJ_KvJOBu9ev1IfCjvMDG41sBymzWUiA0A8kbILZFL4F7V8Int9Cv3nnwU8pxF2SBCImD-L-LWEtGlDDMRAPlJyt6ocuwXlEDfg9mYO-2oFW1_vetTSNdH7bXEEr75zxb8tcrTzxH9KR0mt6EeApzVbOL7j4iKBn21xYoM0jZStT2E5akt8JaiqY4zMisj6dskR-jFUEbZh6mAbrYaFx0sLIHnxb2HobCJK-1E=s971-w949-h971-no?authuser=0', [Validators.required, this.isHttps]);

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
