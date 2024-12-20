import { CatsService } from '@services/cats/cats.service';
import { Component, Input } from '@angular/core';
import { CatModel } from '@models/cat/cat.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent {
  @Input() cat!: CatModel;

  constructor(private catsService: CatsService, private router: Router) {}

  async selectCat(cat: CatModel) {
    await this.catsService.setSelectedCat(cat);

    this.router.navigate(['details', cat.id]);
  }
}
