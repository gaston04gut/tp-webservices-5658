import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { getCache, removeCache, setCache } from '../../utils/cache-utils';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  private readonly CACHE_KEY = 'conversor_cache_';
  private readonly CACHE_EXPIRATION = 1800000; // 30 minutos en milisegundos

  constructor(private _http: HttpClient) {}

  public getPaises(): Observable<any> {
    const cacheKey = this.CACHE_KEY + 'paises';
    const cached = getCache(cacheKey, this.CACHE_EXPIRATION);

    if (cached) {
      console.log('Obteniendo datos del cache');
      return of(cached);
    }
    const httpOptions = {
      headers: new HttpHeaders({
        apiKey: 'U3HBR6sdeshZnAgOJUORUOV7fjiAbYch',
      }),
    };
    const url = `https://api.apilayer.com/currency_data/list`;
    return this._http.get<any>(url, httpOptions).pipe(
      tap((response) => {
        setCache(cacheKey, response);
        console.log('Obteniendo datos de la API');
      })
    );
  }

  public convertirMoneda(
    from: string,
    to: string,
    amount: string
  ): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        apiKey: 'U3HBR6sdeshZnAgOJUORUOV7fjiAbYch',
      }),
    };
    const url = `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`;
    return this._http.get<any>(url, httpOptions).pipe(
      map((response) => {
        // Verificar si la respuesta tiene la propiedad result
        return response.result;
      })
    );
  }
}
