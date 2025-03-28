import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassValue, tv, VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  slots: {
    base: 'smbr:preflight',
    label: 'smbr:min-w-20',
  },
  variants: {
    variant: {
      primary: {
        base: 'smbr:bg-orange-500',
      },
      secondary: {
        base: 'smbr:bg-blue-500',
      },
    },
  },
});

const { base, label } = buttonVariants();

export type ButtonVariants = VariantProps<typeof buttonVariants>;

@Component({
  selector: 'button[smbrButton]',
  imports: [CommonModule],
  template: `<span [class]="labelClass()"><ng-content /></span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class]': 'baseClass()' },
})
export class ButtonComponent {
  readonly variant = input<ButtonVariants['variant']>('primary');

  readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected readonly baseClass = computed(() =>
    base({ variant: this.variant(), class: this.userClass() }),
  );

  protected readonly labelClass = computed(() =>
    label({ variant: this.variant() }),
  );
}
