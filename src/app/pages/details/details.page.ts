import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, RefresherCustomEvent } from '@ionic/angular';
import { CatModel } from '@models/cat/cat.model';
import { CatsService } from '@services/cats/cats.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  // Inyecta el servicio Platform para detectar la plataforma
  private platform = inject(Platform);
  // Define la variable para almacenar el gato seleccionado
  selectedCat!: CatModel;
  // Define la variable para almacenar las entradas del objeto del gato
  objectEntries!: [string, any][];

  constructor(public catsService: CatsService, private router: Router) {}

  async ngOnInit() {
    this.selectedCat = await this.catsService.getSelectedCat();

    // Verifica si el gato seleccionado es válido y si la URL coincide con el ID del gato
    if (
      !this.selectedCat ||
      this.router.url.split('/').pop() !== this.selectedCat.id
    )
      this.router.navigate(['landing']);

    // Convierte el objeto del gato en un array de entradas y las ordena alfabéticamente
    this.objectEntries = Object.entries(this.selectedCat).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
  }

  /**
   * Maneja la acción de refrescar los datos
   * @param ev Evento de refresco
   */
  refresh(ev: RefresherCustomEvent) {
    setTimeout(() => ev.detail.complete(), 1500);
  }
  /**
   * Ordena las entradas de un objeto alfabéticamente por sus claves.
   *
   * @param {any} object - El objeto del cual se quieren obtener las entradas.
   * @returns {Array} - Un array de las entradas del objeto, ordenado por las claves.
   */
  entries(object: any): [string, any][] {
    return Object.entries(object).sort((a, b) => a[0].localeCompare(b[0]));
  }

  /**
   * Valida si el parámetro es un objeto.
   *
   * @param {any} object - El valor que se va a validar.
   * @returns {boolean} - Retorna `true` si el parámetro es un objeto, `false` en caso contrario.
   */
  validateObject(object: any): boolean {
    return typeof object === 'object';
  }

  /**
   * Valida si el parámetro no es un número y tiene una longitud mayor a 10.
   *
   * @param {any} object - El valor que se va a validar.
   * @returns {boolean} - Retorna `true` si el objeto no es un número y tiene longitud mayor a 10, `false` en caso contrario.
   */
  validateLength(object: any): boolean {
    return typeof object !== 'number' && object.length > 10;
  }

  /**
   * Valida si la URL proporcionada es una cadena de texto que comienza con 'https' o 'http'.
   *
   * @param {string} url - La URL que se va a validar.
   * @returns {boolean} - Retorna `true` si la URL es válida, `false` en caso contrario.
   */
  validateUrl(url: string): boolean {
    return (
      typeof url === 'string' &&
      (url.startsWith('https') || url.startsWith('http'))
    );
  }
}
