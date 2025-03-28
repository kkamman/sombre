import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from 'sombre';

@Component({
  imports: [RouterModule, ButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sombre-todo';
}
