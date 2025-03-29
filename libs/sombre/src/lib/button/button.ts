import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ClassValue } from 'tailwind-variants';
import { ButtonVariants, buttonVariants } from './variants';

const { base: baseVariant, label: labelVariant } = buttonVariants();

@Component({
  selector: 'button[smbrButton]',
  imports: [],
  template: `<span [class]="labelClass()"><ng-content /></span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'baseClass()' },
})
export class ButtonComponent {
  readonly color = input<ButtonVariants['color']>();

  readonly variant = input<ButtonVariants['variant']>();

  readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly baseClass = computed(() =>
    baseVariant({
      color: this.color(),
      variant: this.variant(),
      class: this.userClass(),
    }),
  );

  protected readonly labelClass = computed(() =>
    labelVariant({ color: this.color() }),
  );
}
