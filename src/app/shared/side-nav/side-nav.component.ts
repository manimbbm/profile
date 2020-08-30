import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'side-nav',
  templateUrl: 'side-nav.component.html',
  styleUrls: ['side-nav.component.scss']
})

export class SideNavComponent{
  imageUrl: FormControl = new FormControl('https://lh3.googleusercontent.com/fife/ABSRlIqzZFhYrvmr5z_KG3GT7cYOZHEXSA06kl2xxcO_yB39iE3okX-Z3rFLBkrnUCD3dVjy1lHpx69XwOWq8dOnYVC4e2YfuotbNj4ikLoBZtYBZXLXXW3G8NXgVXjlr9wpijNri6qR0RTU54PPIT3nDNsfL07kqtfhMCpcRj4vXnlcxgOsz9m3Qz9ZSpdG7OJvUcm0H6Gt_XhlFzgpt8CwI7oWiBL7TO3qi5XIVChXRka0aiUWqbs1UNFkh2QTrvsZdUf352ukiV4myktcTcRXi2z8t6pA6EP-OUkxVk4KB7mFjZPEngnfDccenIugiykudPZGKqaOTTOKLgLF_qNplFd-LmlrmtyhUAF31wVNHtKRVBPLmL_X33dZScswPf-2IRA_QKB9lubJJ3F1esuh3xnVWQl22nHdGumRoIADZec4y-nVbjmQWNXliv7jSGaR8WJikBI01ZPKAEG_Xs2vurvgvVVvsCv4bKuPHO-pKi8_J92e8pSLqRtBtO675f84lgG21kTnEW7LxpyK_kq_kvPvSH1j6GrK-Y4Zboo3igDVXLdXkOMSDEgDWLtpjBBvURnxPD2iC2-904PS6IZtDlSYhqRRfpCK5bdKyUmwmDQ-93Ar8GndXOOwsUnMCUvvQzooTvCeebd5J_h-irPpSViZcthMJo9pWjGcl65GxfidpvsPUM_HAxORN_ZcDPh5IyYtWkMKRHnD-pDs4-B2XmgRw7fheJO9q8CQqA_aeWjQTi8=s971-w949-h971-no?authuser=0', [Validators.required, this.isHttps]);

  isHttps(control: FormControl) {
    if (control.value && control.value.indexOf('https') === 0) {
      return null;
    } else {
      return {'isHttps': 'Its not https'}
    }
  }

}
