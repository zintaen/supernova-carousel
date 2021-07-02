import { TopProductResponse } from 'types';

export function parseMoneyValueWithCurrency(
  data: TopProductResponse['price']
): {
  default: string | null;
  sale: string | null;
} {
  return {
    default: data.default
      ? data.format
          .replace('{{currency}}', data.currency)
          .replace('{{value}}', String(data.default))
      : null,
    sale: data.sale
      ? data.format
          .replace('{{currency}}', data.currency)
          .replace('{{value}}', String(data.sale))
      : null,
  };
}
