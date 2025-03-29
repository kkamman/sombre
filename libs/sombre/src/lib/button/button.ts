import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ClassValue, tv } from 'tailwind-variants';
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
  readonly variant = input<ButtonVariants['variant']>('primary');

  readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly baseClass = computed(() =>
    baseVariant({ variant: this.variant(), class: this.userClass() }),
  );

  protected readonly labelClass = computed(() =>
    labelVariant({ variant: this.variant() }),
  );
}
