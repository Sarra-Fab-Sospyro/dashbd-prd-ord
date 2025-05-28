import { Component, inject, OnInit } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'cem-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cespim-exam';


}
