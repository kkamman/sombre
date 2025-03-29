import { tv, VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  slots: {
    base: 'smbr:preflight smbr:min-w-20 smbr:rounded smbr:px-4 smbr:py-2',
    label: 'smbr:no-preflight',
  },
  variants: {
    variant: {
      primary: {
        base: 'smbr:bg-primary-500',
      },
      secondary: {
        base: 'smbr:bg-secondary-500',
      },
    },
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
