import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smbr-sombre',
  imports: [CommonModule],
  templateUrl: './sombre.component.html',
  styleUrl: './sombre.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SombreComponent {}
