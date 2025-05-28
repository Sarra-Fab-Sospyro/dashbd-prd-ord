import { Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _spinner = signal<boolean>(false);
  constructor() { }

  startSpinner() {
    this._spinner.set(true);
  }

  endSpinner() {
    this._spinner.set(false);
  }

  get isLoading(): Signal<boolean> {
    return this._spinner;
  }
}
