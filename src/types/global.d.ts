import { IWeglot } from '@/types/weglot';

declare global {
  type Nullable<T> = T | null;
  type NUllify<T extends object> = { [K in keyof T]: T[K] | null };

  interface Window {
    Weglot: IWeglot;
  }
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
