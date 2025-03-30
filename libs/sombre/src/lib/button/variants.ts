import { tv, VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  base: 'smbr:preflight smbr:inline-flex smbr:min-w-20 smbr:cursor-pointer smbr:items-center smbr:justify-center smbr:rounded-lg smbr:px-4 smbr:py-2 smbr:text-center smbr:font-display smbr:font-semibold smbr:[transition:background_0.2s]',
  variants: {
    color: {
      default: 'smbr:bg-surface-foreground smbr:text-surface',
      primary: 'smbr:bg-primary smbr:text-primary-foreground',
      secondary: 'smbr:bg-secondary smbr:text-secondary-foreground',
    },
    variant: {
      outline: 'smbr:border smbr:bg-transparent smbr:text-surface-foreground',
      text: 'smbr:bg-transparent',
    },
    progress: {
      true: 'smbr:bg-transparent smbr:bg-linear-to-r smbr:from-(percentage:--smbr-button-progress) smbr:to-transparent! smbr:to-(percentage:--smbr-button-progress) smbr:[transition:background_0.2s,_--tw-gradient-from-position_0.5s,_--tw-gradient-to-position_0.5s]',
    },
    disabled: {
      true: 'smbr:cursor-not-allowed smbr:opacity-40',
      false:
        'smbr:focus-visible:outline-2 smbr:focus-visible:outline-offset-2 smbr:focus-visible:outline-primary',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'outline',
      class: 'smbr:border-primary',
    },
    {
      color: 'secondary',
      variant: 'outline',
      class: 'smbr:border-secondary',
    },
    {
      color: 'default',
      variant: 'text',
      class: 'smbr:text-surface-foreground',
    },
    {
      color: 'primary',
      variant: 'text',
      class: 'smbr:text-primary',
    },
    {
      color: 'secondary',
      variant: 'text',
      class: 'smbr:text-secondary',
    },
    {
      color: 'default',
      variant: ['outline', 'text'],
      disabled: false,
      class:
        'smbr:hover:bg-surface-foreground/10 smbr:active:bg-surface-foreground/10',
    },
    {
      color: 'primary',
      variant: ['outline', 'text'],
      disabled: false,
      class: 'smbr:hover:bg-primary/10 smbr:active:bg-primary/10',
    },
    {
      color: 'secondary',
      variant: ['outline', 'text'],
      disabled: false,
      class: 'smbr:hover:bg-secondary/10 smbr:active:bg-secondary/10',
    },
    {
      color: 'default',
      variant: undefined,
      disabled: false,
      class:
        'smbr:hover:bg-surface-foreground/80 smbr:active:bg-surface-foreground/80',
    },
    {
      color: 'primary',
      variant: undefined,
      disabled: false,
      class: 'smbr:hover:bg-primary/80 smbr:active:bg-primary/80',
    },
    {
      color: 'secondary',
      variant: undefined,
      disabled: false,
      class: 'smbr:hover:bg-secondary/80 smbr:active:bg-secondary/80',
    },
    {
      progress: true,
      color: 'default',
      variant: undefined,
      class: 'smbr:bg-surface-foreground/70 smbr:from-surface-foreground!',
    },
    {
      progress: true,
      color: 'primary',
      variant: undefined,
      class: 'smbr:bg-primary/70 smbr:from-primary!',
    },
    {
      progress: true,
      color: 'secondary',
      variant: undefined,
      class: 'smbr:bg-secondary/70 smbr:from-secondary!',
    },
    {
      progress: true,
      color: 'default',
      variant: ['outline', 'text'],
      class: 'smbr:from-surface-foreground/20!',
    },
    {
      progress: true,
      color: 'primary',
      variant: ['outline', 'text'],
      class: 'smbr:from-primary/20!',
    },
    {
      progress: true,
      color: 'secondary',
      variant: ['outline', 'text'],
      class: 'smbr:from-secondary/20!',
    },
  ],
  defaultVariants: {
    color: 'default',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
