import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  constructor(private _httpClient: HttpClient) {}

  public getLibros(anio: number, mes: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '3c6960749emshdce59725860378bp180474jsn5763249960a8',
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
      }),
    };
    const url = `https://hapi-books.p.rapidapi.com/month/${anio}/${mes}`;
    return this._httpClient.get<any>(url, httpOptions);
  }

  public getInfoLibro(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '3c6960749emshdce59725860378bp180474jsn5763249960a8',
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
      }),
    };
    const url = `https://hapi-books.p.rapidapi.com/book/${id}`;
    return this._httpClient.get<any>(url, httpOptions);
  }


}
