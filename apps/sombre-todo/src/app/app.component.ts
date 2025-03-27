import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SombreComponent } from 'sombre';

@Component({
  imports: [NxWelcomeComponent, RouterModule, SombreComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sombre-todo';
}
