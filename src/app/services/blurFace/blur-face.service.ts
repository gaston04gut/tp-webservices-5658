import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlurFaceService {

  constructor(private _http: HttpClient) { }
  public getImagenBlur(urlImagen: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'apikey': 'U3HBR6sdeshZnAgOJUORUOV7fjiAbYch',
      })
    } ;
    const url = `https://api.apilayer.com/face_pixelizer/url?url=${urlImagen}`
    return this._http.get<any>(url, httpOptions)
  }
}
