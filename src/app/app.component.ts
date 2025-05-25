import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NoticiasComponent } from "./components/noticias/noticias.component";
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FooterComponent],//, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-webservice-5658';
}
