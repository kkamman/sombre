import {
  booleanAttribute,
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
  host: {
    '[class]': 'baseClass()',
    '[style.--smbr-button-progress]': 'progressPercentage()',
  },
})
export class ButtonComponent {
  readonly color = input<ButtonVariants['color']>();

  readonly variant = input<ButtonVariants['variant']>();

  readonly class = input<ClassValue>('');

  readonly disabled = input(false, { transform: booleanAttribute });

  readonly progress = input<number>();

  protected readonly progressPercentage = computed(
    () => `${this.progress() ?? 100}%`,
  );

  protected readonly baseClass = computed(() =>
    buttonVariants({
      color: this.color(),
      variant: this.variant(),
      disabled: this.disabled(),
      progress: this.progress() != null,
      class: this.class(),
    }),
  );
}
