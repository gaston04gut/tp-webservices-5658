import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { getCache, setCache, removeCache } from '../../utils/cache-utils';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  private readonly CACHE_KEY = 'noticias_cache_';
  private readonly CACHE_EXPIRATION = 1800000; // 30 minutos en milisegundos

  constructor(private _http: HttpClient) {}

  //metodo para obtener las noticias
  public getNoticias(categoria: string = 'WORLD'): Observable<any> { //categoria por defecto WORLD, esto se usa cuando necesita parametros
    const cacheKey = this.CACHE_KEY + categoria; // clave del cache string
    const cached = getCache(cacheKey, this.CACHE_EXPIRATION); //obtener los datos del cache

    // Si hay datos en caché, devolverlos
    if (cached) {
      console.log(`Sirviendo noticias para '${categoria}' desde el caché.`);
      return of(cached);
    } //si no hay datos en caché, obtenerlos de la api

    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'google-news22.p.rapidapi.com',
        'x-rapidapi-key': '3c6960749emshdce59725860378bp180474jsn5763249960a8',
      }),
    };

    const url = `https://google-news22.p.rapidapi.com/v1/topic-headlines?country=ar&language=es-419&topic=${categoria}`;
    return this._http.get(url, httpOptions).pipe(
      tap((response) => {
        setCache(cacheKey, response);
        console.log(`Noticias para '${categoria}' guardadas en caché.`);
      })
    );
  }
}
