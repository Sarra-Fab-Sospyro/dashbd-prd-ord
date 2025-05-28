import { Component, inject, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'cem-spinner',
  standalone: false,
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss'
})
export class SpinnerComponent implements OnInit{

  spinnerService = inject(LoadingService);

  ngOnInit(): void {
    this.spinnerService.isLoading;
  }

}
