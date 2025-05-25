import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeModel } from '../../../models/home/home-model';
import { HomeService } from '../../../services/home/home.service';
@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homes!: Array<HomeModel>;
  constructor(private homeService: HomeService) {
    this.homes = this.homeService.getHomes();
  }

}
