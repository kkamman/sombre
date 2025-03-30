import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ClassValue } from 'tailwind-variants';
import { ButtonVariants, buttonVariants } from './variants';

@Component({
  selector: 'button[smbrButton], a[smbrButton]',
  imports: [],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'baseClass()' },
})
export class ButtonComponent {
  readonly color = input<ButtonVariants['color']>();

  readonly variant = input<ButtonVariants['variant']>();

  readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly baseClass = computed(() =>
    buttonVariants({
      color: this.color(),
      variant: this.variant(),
      class: this.userClass(),
    }),
  );
}
