import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { YoutubeModel } from '../../../models/practica/youtube-model';
import { YoutubeService } from '../../../services/practica/youtube.service';
import { errorContext } from 'rxjs/internal/util/errorContext';

declare var bootstrap: any;
@Component({
  selector: 'app-youtube',
  imports: [CommonModule, FormsModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css',
})
export class YoutubeComponent {
  query: string = '';
  videos: YoutubeModel[] = [];
  videoID = '';
  videoDetalle?: YoutubeModel;

  @ViewChild('miModalFacheroEnHTML')
  acaSeLlamaModalEnComponent!: ElementRef; //

  constructor(private youtubeService: YoutubeService) {}

  getVideos(query: string) {
    this.youtubeService.getVideo(query).subscribe(
      (result) => {
        this.videos = result.contents.map((element: any) => {
          const video = new YoutubeModel();
          video.id = element.video.videoId;
          video.short_url = '-';
          video.channelName = element.video.author.title;
          video.channelIcon = element.video.author.avatar[0].url;
          video.title = element.video.title;

          video.descriptionSnippet = element.video.descriptionSnippet;
          video.publishedTimeText = element.video.publishedTimeText;
          video.views = element.video.stats.views;

          return video;
        });
        console.log(this.videos); // Imprime la lista de vídeos en la consola
      },
      (error) => {
        console.log('Error al obtener los vídeos de YouTube');
        console.log(query);
        console.log(error);
      }
    );
  }

  mostrarInfo(event: Event, video: YoutubeModel) {
    event.preventDefault();

    this.videoDetalle = video;

    const modalElement = this.acaSeLlamaModalEnComponent.nativeElement;
    const modalInstance = new bootstrap.Modal(modalElement);
    modalInstance.show();
  }
}
