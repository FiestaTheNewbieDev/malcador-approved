export interface IWeglot {
  initialize: (options: IWeglotOptions) => void;
  initialized: boolean;
  getCurrentLang: () => string;
  getLanguageName: (code: string) => string;
  getBestAvailableLanguage: () => string;
  switchTo: (code: string) => void;
  getAvailableLanguages: () => string[];
  on: (event: WeglotEvent, callback: (...args: unknown[]) => void) => void;
  off: (event: WeglotEvent, callback: (...args: unknown[]) => void) => void;
  options: IWeglotOptions;
}

export type WeglotEvent = 'initialized' | 'languageChanged' | 'switchersReady';

export interface IWeglotOptions {
  api_key: string;
  switchers?: Partial<{
    style: Partial<{
      with_name: boolean;
      full_name: boolean;
      is_dropdown: boolean;
      with_flags: boolean;
      flag_type: 'shiny' | 'square' | 'circle' | 'rectangle_mat';
      invert_flags: boolean;
    }>;
    location: Partial<{
      target: string;
      sibling: Nullable<string>;
    }>;
  }>[];
  wait_transition?: boolean;
  hide_switcher?: boolean;
  translate_search?: boolean;
  search_forms?: string;
  search_parameter?: string;
  whitelist?: { value: string }[];
  cache?: boolean;
  extra_definitions?: {
    type: number;
    selector: string;
    attribute: string;
  }[];
  remove_unused_link_hooks?: boolean;
  extra_merged_selectors?: string[];
}

export type WeglotClassName = 'weglot-translate' | 'weglot-no-translate';
