import { TopProductResponse } from 'types';

export function parseMoneyValueWithCurrency(
  data: TopProductResponse['price']
): {
  default: string;
  sale: string | null;
} {
  return {
    default: data.format
      .replace('{{currency}}', data.currency)
      .replace('{{value}}', String(data.default)),
    sale: data.format
      .replace('{{currency}}', data.currency)
      .replace('{{value}}', String(data.sale)),
  };
}
