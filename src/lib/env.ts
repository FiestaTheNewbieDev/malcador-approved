export const NODE_ENV: 'development' | 'production' | 'test' =
  process.env.NODE_ENV || 'development';
export const ENABLE_WEGLOT: boolean = process.env.ENABLE_WEGLOT === 'true';
export const NEXT_PUBLIC_WEGLOT_API_KEY: string | undefined =
  process.env.NEXT_PUBLIC_WEGLOT_API_KEY;
