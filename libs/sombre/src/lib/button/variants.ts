import { tv, VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  base: 'smbr:preflight smbr:inline-flex smbr:min-w-20 smbr:cursor-pointer smbr:items-center smbr:justify-center smbr:rounded-lg smbr:bg-surface-foreground smbr:px-4 smbr:py-2 smbr:text-center smbr:font-display smbr:font-semibold smbr:text-surface smbr:outline-primary smbr:transition-colors smbr:hover:not-disabled:bg-surface-foreground/80 smbr:focus-visible:outline-2 smbr:focus-visible:outline-offset-2 smbr:active:not-disabled:bg-surface-foreground/80 smbr:disabled:cursor-not-allowed smbr:disabled:opacity-40',
  variants: {
    color: {
      primary:
        'smbr:bg-primary smbr:text-primary-foreground smbr:hover:not-disabled:bg-primary/80 smbr:active:not-disabled:bg-primary/80',
      secondary:
        'smbr:bg-secondary smbr:text-secondary-foreground smbr:hover:not-disabled:bg-secondary/80 smbr:active:not-disabled:bg-secondary/80',
    },
    variant: {
      outline:
        'smbr:border smbr:bg-transparent smbr:text-surface-foreground smbr:ring-offset-2 smbr:hover:not-disabled:bg-surface-foreground/10 smbr:active:not-disabled:bg-surface-foreground/10',
      text: 'smbr:bg-transparent smbr:text-surface-foreground smbr:hover:not-disabled:bg-surface-foreground/10 smbr:active:not-disabled:bg-surface-foreground/10',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: ['outline', 'text'],
      class:
        'smbr:border-primary smbr:text-primary smbr:hover:not-disabled:bg-primary/10 smbr:active:not-disabled:bg-primary/10',
    },
    {
      color: 'secondary',
      variant: ['outline', 'text'],
      class:
        'smbr:border-secondary smbr:text-secondary smbr:hover:not-disabled:bg-secondary/10 smbr:active:not-disabled:bg-secondary/10',
    },
  ],
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
