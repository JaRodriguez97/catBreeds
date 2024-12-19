import { Component, inject, OnInit } from '@angular/core';
import { CatsService } from '@services/cats/cats.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { CatModel } from '@app/core/models/cat/cat.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private platform = inject(Platform);
  selectedCat!: CatModel;

  constructor(public catsService: CatsService, private router: Router) {}

  async ngOnInit() {
    // Obtiene el objeto seleccionado desde el almacenamiento
    this.selectedCat = await this.catsService.getSelectedCat();

    if (!this.selectedCat) this.router.navigate(['landing']);
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios');
    return isIos ? 'Inbox' : '';
  }
}
