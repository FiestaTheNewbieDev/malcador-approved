import { WeglotClassName } from '@/types/weglot';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWeglotClassName(
  type: 'translate' | 'no-translate',
): WeglotClassName {
  switch (type) {
    case 'translate':
      return 'weglot-translate';
    case 'no-translate':
      return 'weglot-no-translate';
    default:
      throw new Error(`Invalid Weglot class name: ${type}`);
  }
}
