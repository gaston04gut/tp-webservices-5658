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
        'x-rapidapi-key': 'b273fe9107msh7441f62de2891d5p1c3a5fjsn61106964070e',
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
      }),
    };
    const url = `https://hapi-books.p.rapidapi.com/month/${anio}/${mes}`;
    return this._httpClient.get<any>(url, httpOptions);
  }

  public getInfoLibro(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'b273fe9107msh7441f62de2891d5p1c3a5fjsn61106964070e',
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com',
      }),
    };
    const url = `https://hapi-books.p.rapidapi.com/book/${id}`;
    return this._httpClient.get<any>(url, httpOptions);
  }
}
