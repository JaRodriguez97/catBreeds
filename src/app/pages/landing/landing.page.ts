import { CatsService } from '@services/cats/cats.service';
import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { CatModel } from '@models/cat/cat.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  public results: CatModel[] = [];

  constructor(public catsService: CatsService) {}

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    this.catsService
      .getCats()
      .subscribe((res) => (this.catsService.cats = res));
  }

  refresh(ev: any) {
    setTimeout(() => {
      this.getCats();
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.catsService.cats.filter(
      (d) => d.id.indexOf(query) > -1
    );
  }
}
