import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-ge-thank-you',
  templateUrl: './form-ge-thank-you.component.html',
  styleUrls: ['./form-ge-thank-you.component.scss']
})
export class FormGeThankYouComponent implements OnInit {

  constructor(
    public router: Router
  ) {
    fbq('track', 'Lead');
  }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToAiesec() {
    window.open("https://aiesec.org/", "_blank");
  }

  goToBlog() {
    window.open("http://aiesec.blog.br/", "_blank");
  }

}
