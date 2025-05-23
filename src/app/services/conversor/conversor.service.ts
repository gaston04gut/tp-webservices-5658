import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { getCache, removeCache, setCache } from '../../utils/cache-utils';
import { ConversorModel } from '../../models/conversor/conversor-model';
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
        'apiKey': 'U3HBR6sdeshZnAgOJUORUOV7fjiAbYch'
      }),
    };
    const url = `https://api.apilayer.com/currency_data/list`;
    return this._http
      .get<{ currencies: Record<string, string> }>(url, httpOptions)
      .pipe(
        map((response) => {
          const models: ConversorModel[] = [];
          for (const [code, name] of Object.entries(response.currencies)) {
            const model = new ConversorModel();
            model.name = name;
            model.currency = code;
            models.push(model);
          }
          return models;
        }),
        tap((models) => {
          setCache(cacheKey, models);
          console.log('Obteniendo datos de la API');
        })
      );
  }

  public convertirMoneda(
    from: string,
    to: string,
    amount: string
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        apiKey: 'U3HBR6sdeshZnAgOJUORUOV7fjiAbYch',
      }),
    };
    const url = `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`;
    return this._http
      .get<any>(url, httpOptions)
      .pipe(map((response) => response.result));
  }
}
