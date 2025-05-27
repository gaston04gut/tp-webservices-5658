import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  constructor(private _http: HttpClient) {}

  public getPeliculas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '3c6960749emshdce59725860378bp180474jsn5763249960a8',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com',
      }),
    };
    const url = `https://imdb236.p.rapidapi.com/api/imdb/most-popular-movies`;
    return this._http.get<any>(url, httpOptions);
  }

  public getPeliculaInfo(id: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
      'x-rapidapi-key': '3c6960749emshdce59725860378bp180474jsn5763249960a8',
        'x-rapidapi-host': 'imdb236.p.rapidapi.com',
      }),
    };
    const url = `https://imdb236.p.rapidapi.com/api/imdb/${id}`
    return this._http.get<any>(url, httpOptions);
  }

}
