import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GeneradorQRService {
  constructor(private _http: HttpClient) {}

  public generarQR(texto: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '3c6960749emshdce59725860378bp180474jsn5763249960a8',
        'x-rapidapi-host': 'qr-code-generator116.p.rapidapi.com',
      }),
    };
    const url = `https://qr-code-generator116.p.rapidapi.com/simple_base64.php?content=${texto}`
    return this._http.get<any>(url, httpOptions);
  }
}
