export type TopProductResponse = {
  id: number;
  thumbnailUrl: string;
  name: string;
  price: {
    format: '{{currency}}{{value}}' | '{{value}}{{currency}}';
    currency: '$';
    default: number;
    sale?: number;
  };
  rating: {
    total: number;
    averageScore: number;
  };
};
