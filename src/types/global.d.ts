type Nullable<T> = T | null;
type NUllify<T extends object> = { [K in keyof T]: T[K] | null };

type NestedKeys<T> = T extends object
  ? {
      [K in Extract<keyof T, string>]: T[K] extends object
        ? K | `${K}.${NestedKeys<T[K]>}`
        : K;
    }[Extract<keyof T, string>]
  : never;

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
