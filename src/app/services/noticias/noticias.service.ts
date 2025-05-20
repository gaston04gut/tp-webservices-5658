import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor(private _http: HttpClient) {}

  //metodo para obtener las noticias
  public getNoticias(categoria: string = 'WORLD'): Observable<any> {
    //retorna un observable
    const httpOptions = {
      headers: new HttpHeaders({
        //'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
        //'x-rapidapi-key': '3c6960749emshdce59725860378bp180474jsn5763249960a8',
      }),
    };
    const url =
  `https://real-time-news-data.p.rapidapi.com/topic-headlines?topic=${categoria}&limit=500&country=US&lang=es-419`;
    return this._http.get(url, httpOptions);
  }
}
