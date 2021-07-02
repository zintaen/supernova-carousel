import { FC } from 'react';

import { TopProductResponse } from 'types';
import { parseMoneyValueWithCurrency } from 'utils';
import RatingStars from './rating-stars';

type Props = {
  data: Omit<TopProductResponse, 'id'>;
};

const Card: FC<Props> = ({ data }) => {
  const { thumbnailUrl, name, rating, price } = data;
  const parsedPrice = parseMoneyValueWithCurrency(price);

  return (
    <div className="card border-0 h-100">
      <img
        src={`${process.env.PUBLIC_URL}${thumbnailUrl}`}
        className="card-img-top"
        alt="Top product"
        title="Top product"
        width="298px"
        height="298px"
      />
      <div className="card-body d-flex flex-column align-items-center text-center">
        <div className="d-flex align-items-center mb-2 text-brand">
          <RatingStars total={data.rating.averageScore} />
          <div className="text-body" style={{ fontSize: 14 }}>
            (
            <a href="/" className="text-body">
              {rating.total}
            </a>
            )
          </div>
        </div>

        <p className="card-title fs-4 flex-grow-1 d-flex align-items-center">
          {name}
        </p>
        <div className="d-flex justify-content-center">
          {data.price.sale && (
            <p className="text-decoration-line-through text-dark fs-4 me-4">
              {parsedPrice.default}
            </p>
          )}
          <p className="text-brand fs-4 fw-bold">
            {parsedPrice.sale || parsedPrice.default}
          </p>
        </div>

        <button
          type="button"
          className="btn btn-brand text-white block py-2 fs-5 fw-bold w-100"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
