import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  InfiniteScrollCustomEvent,
  RefresherCustomEvent,
} from '@ionic/angular';
import { CatModel } from '@models/cat/cat.model';
import { CatsService } from '@services/cats/cats.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  /* Array de datos ficticios para mostrar skeleton loading */
  public skeletonArray = Array(10);
  /* Lista de gatos para mostrar en la página */
  public cats: CatModel[] = [];
  /* Resultados filtrados basados en la búsqueda */
  public results: CatModel[] = [];

  constructor(
    public catsService: CatsService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    /* Cargar los datos al iniciar el componente */
    this.getCats();
  }

  /**
   * Muestra una alerta de error con un encabezado y mensaje proporcionados
   * @param header Título de la alerta
   * @param message Mensaje de la alerta
   */
  private async showErrorAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  /**
   * Obtiene la lista de gatos desde el servicio y maneja errores si ocurren
   */
  private getCats() {
    this.catsService.getCats().subscribe({
      next: (res) => (this.catsService.cats = res),
      error: async (err) =>
        await this.showErrorAlert(
          'Error',
          'Failed to load data. Please try again.'
        ).then(() => console.error('Error fetching cats:', err)),
      complete: () =>
        setTimeout(() => {
          if (this.catsService.cats && this.catsService.cats.length > 10)
            this.cats = this.catsService.cats.slice(0, 10);
        }, 500),
    });
  }

  /**
   * Maneja la acción de refrescar los datos
   * @param ev Evento de refresco
   */
  public refresh(ev: RefresherCustomEvent) {
    this.getCats();
    setTimeout(() => ev.detail.complete(), 1500);
  }

  /**
   * Filtra la lista de gatos según el texto ingresado en el buscador
   * @param event Evento del input de búsqueda
   */
  public handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.catsService.cats.filter(
      (d) => d.id.indexOf(query) > -1
    );
  }

  /**
   * Agrega más gatos a la lista a medida que se hace scroll infinito
   */
  private generateCatsScroll() {
    if (this.catsService.cats && this.catsService.cats.length > 10)
      this.cats = this.catsService.cats.slice(0, this.cats.length + 10);
  }

  /**
   * Maneja el evento de scroll infinito
   * @param ev Evento de scroll infinito
   */
  public onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateCatsScroll();
    setTimeout(() => ev.target.complete(), 500);
  }
}
