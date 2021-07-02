import { TopProductResponse } from 'types';

export default [
  {
    id: 1,
    thumbnailUrl: '/images/top-product-1.jpeg',
    name: 'Like A Virgin Hair Masque',
    price: {
      format: '{{currency}}{{value}}',
      currency: '$',
      default: 44.9,
    },
    rating: {
      total: 3365,
      averageScore: 4.5,
    },
  },
  {
    id: 2,
    thumbnailUrl: '/images/top-product-2.jpeg',
    name: 'Deep Clean Scalp Scrub',
    price: {
      format: '{{currency}}{{value}}',
      currency: '$',
      default: 36.9,
    },
    rating: {
      total: 173,
      averageScore: 4.5,
    },
  },
  {
    id: 3,
    thumbnailUrl: '/images/top-product-3.jpeg',
    name: 'Sunny Honey Bali Bronzing Bundle',
    price: {
      format: '{{currency}}{{value}}',
      currency: '$',
      default: 73.9,
      sale: 46.9,
    },
    rating: {
      total: 3669,
      averageScore: 4.5,
    },
  },
  {
    id: 4,
    thumbnailUrl: '/images/top-product-4.jpeg',
    name: `That's A Wrap Bundle`,
    price: {
      format: '{{currency}}{{value}}',
      currency: '$',
      default: 77.7,
      sale: 52.8,
    },
    rating: {
      total: 3612,
      averageScore: 4.5,
    },
  },
  {
    id: 5,
    thumbnailUrl: '/images/top-product-5.jpeg',
    name: 'Bali Buffing Sugar',
    price: {
      format: '{{currency}}{{value}}',
      currency: '$',
      default: 34.9,
    },
    rating: {
      total: 98,
      averageScore: 4.5,
    },
  },
] as Array<TopProductResponse>;
