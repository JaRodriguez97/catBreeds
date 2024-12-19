import { Injectable } from '@angular/core';
import { HttpClient /* HttpHeaders */ } from '@angular/common/http';
import { CatModel } from '@models/cat/cat.model';
import { environment } from '@env/environment.prod';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  // private API_KEY = environment.API_KEY;
  private URL = environment.URL;

  public cats: CatModel[] = [];
  public catSelected!: CatModel;

  // 'x-api-key': this.API_KEY,
  // private headers = new HttpHeaders();

  private readonly STORAGE_KEY = 'selectedCat'; // Clave para almacenar el objeto

  constructor(private http: HttpClient, private storage: Storage) {
    this.init();
  }

  async init(): Promise<void> {
    await this.storage.create();
  }

  getCats() {
    return this.http.get<CatModel[]>(
      this.URL
      /* { headers: this.headers } */
    );
  }

  // Guarda el objeto seleccionado en almacenamiento
  async setSelectedCat(cat: any): Promise<void> {
    await this.storage.set(this.STORAGE_KEY, cat);
  }

  // Obtiene el objeto seleccionado del almacenamiento
  async getSelectedCat(): Promise<any> {
    return await this.storage.get(this.STORAGE_KEY);
  }

  // Elimina el objeto seleccionado del almacenamiento
  async clearSelectedCat(): Promise<void> {
    await this.storage.remove(this.STORAGE_KEY);
  }
}