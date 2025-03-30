import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { delay, interval, map, tap } from 'rxjs';
import { ButtonComponent } from 'sombre';

@Component({
  imports: [CommonModule, RouterModule, ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sombre-todo';

  protected readonly progress$ = interval(500).pipe(map((x) => (x % 10) * 10));
}
