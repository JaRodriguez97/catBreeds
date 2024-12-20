import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-splash',
  templateUrl: './custom-splash.page.html',
  styleUrls: ['./custom-splash.page.scss'],
})
export class CustomSplashPage implements OnInit {
  load: Boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.goToLanding();
      this.load = true;
    }, 3000);
  }

  goToLanding() {
    this.router.navigate(['landing']);
  }
}
