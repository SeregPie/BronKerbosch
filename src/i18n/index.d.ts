export type FormatFn<ValueT = any, OptionsT extends Record<string, any> = Record<string, any>> = {
  (value: ValueT, options?: Partial<OptionsT>): string;
};

export function t(): string;

export type TranslateFn<ValuesT extends Record<string, any> = Record<string, any>> = {
  (values: ValuesT): string;
};

export type Translation = any;

export type Formatter = any;

export type Instance<
  //
  TranslationsT extends Record<string, Translation> = Record<string, Translation>,
  FormattersT extends Record<string, Formatter> = Record<string, Formatter>,
  ExtrasT extends Record<string, unknown> = Record<string, unknown>,
> = {
  locale: string;
  translations: TranslationsT;
  formatters: FormattersT;
  t: {
    (id: string, values?: Record<string, unknown>): string;
  };
  format: {
    (id: string, options?: Record<string, unknown>): string;
  };
  extras: ExtrasT;
};
