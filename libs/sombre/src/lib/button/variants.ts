import { tv, VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  slots: {
    base: 'smbr:preflight smbr:min-w-20 smbr:cursor-pointer smbr:rounded-lg smbr:bg-surface-foreground smbr:px-4 smbr:py-2 smbr:text-surface smbr:hover:not-disabled:bg-surface-foreground/80 smbr:disabled:cursor-not-allowed smbr:disabled:opacity-40',
    label: 'smbr:no-preflight',
  },
  variants: {
    color: {
      primary: {
        base: 'smbr:bg-primary smbr:text-primary-foreground smbr:hover:not-disabled:bg-primary/80',
      },
      secondary: {
        base: 'smbr:bg-secondary smbr:text-secondary-foreground smbr:hover:not-disabled:bg-secondary/80',
      },
    },
    variant: {
      outline: {
        base: 'smbr:border smbr:bg-transparent smbr:text-surface-foreground smbr:hover:not-disabled:bg-surface-foreground/10',
      },
      text: {
        base: 'smbr:bg-transparent smbr:text-surface-foreground smbr:hover:not-disabled:bg-surface-foreground/10',
      },
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: ['outline', 'text'],
      class:
        'smbr:border-primary smbr:text-primary smbr:hover:not-disabled:bg-primary/10',
    },
    {
      color: 'secondary',
      variant: ['outline', 'text'],
      class:
        'smbr:border-secondary smbr:text-secondary smbr:hover:not-disabled:bg-secondary/10',
    },
  ],
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
