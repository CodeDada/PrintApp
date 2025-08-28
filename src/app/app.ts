import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrintHome } from "./print-home/print-home";

@Component({
  selector: 'app-root',
  imports: [PrintHome],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('PrintApp');
}
