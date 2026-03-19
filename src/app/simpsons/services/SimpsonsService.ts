import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SimpsonsAPI } from '../interfaces/simpsons-api.interface';
import { SimpMapper } from '../mapper/simpsons.mapper';
import { environment } from '@environments/environment';
import { Simpsons } from '../interfaces/simpsons.interface';

@Injectable({
  providedIn: 'root',
})
export class SimpsonsService {
  private http = inject(HttpClient);

  simpsons = signal<Simpsons[]>([]);

  constructor() {
    this.loadSimpsons();
  }

  loadSimpsons() {
    this.http
      .get<SimpsonsAPI>(`${environment.ApiUrlSimpsons}`, {
        params: {
          limit: 20,
          offset: 0,
        },
      })
      .subscribe((resp) => {
        const mapped = SimpMapper.mapArray(resp.results);
        this.simpsons.set(mapped);
      });
  }

  getSimpsonsById(id: number) {
    const simpson = this.http.get<any>(`${environment.ApiUrlSimpsons}/${id}`);
    return simpson;
  }
}
