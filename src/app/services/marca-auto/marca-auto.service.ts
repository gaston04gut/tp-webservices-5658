import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getCache, setCache, removeCache } from '../../utils/cache-utils';

@Injectable({
  providedIn: 'root',
})
export class MarcaAutoService {
  private readonly CACHE_KEY = 'marca_auto_cache_';
  private readonly CACHE_EXPIRATION = 1800000; // 30 minutos en milisegundos

  constructor(private _http: HttpClient) {}

  public getMarcasAuto(): Observable<any> {
    const cacheKey = this.CACHE_KEY + 'marcas';
    const cached = getCache(cacheKey, this.CACHE_EXPIRATION);

    if (cached) {
      console.log('Obteniendo datos del caché');
      return of(cached);
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '3c6960749emshdce59725860378bp180474jsn5763249960a8',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com',
      }),
    };
    const url = `https://car-specs.p.rapidapi.com/v2/cars/makes`;
    return this._http.get(url, httpOptions).pipe(
      tap((response) => {
        setCache(cacheKey, response);
        console.log('Datos obtenidos de la API y almacenados en caché');
      })
    );
  }

  public getModelosAuto(marcaID: string): Observable<any> {
    const cacheKey = this.CACHE_KEY + marcaID;

    const cached = getCache(cacheKey, this.CACHE_EXPIRATION);

    if (cached) {
      console.log('Obteniendo datos del caché');
      return of(cached);
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '3c6960749emshdce59725860378bp180474jsn5763249960a8',
        'X-RapidAPI-Host': 'car-specs.p.rapidapi.com',
      }),
    };

    const url = `https://car-specs.p.rapidapi.com/v2/cars/makes/${marcaID}/models`;

    return this._http.get(url, httpOptions).pipe(
      tap((response) => {
        setCache(cacheKey, response);
        console.log('Datos obtenidos de la API y almacenados en caché');
      })
    );
  }
}
