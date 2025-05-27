import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(private _http: HttpClient) {}
  public getVideo(query: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '3c6960749emshdce59725860378bp180474jsn5763249960a8',
        'x-rapidapi-host': 'youtube138.p.rapidapi.com',
      }),
    };
    const url = `https://youtube138.p.rapidapi.com/search/?q=${query}&hl=en&gl=US`;
    return this._http.get<any>(url, httpOptions);
  }

  public buscarVideo(id: string, videos: []) {
    videos.find((video: any) => {
      if (video.id === id) {
        return video;
      }
    });
  }
}
