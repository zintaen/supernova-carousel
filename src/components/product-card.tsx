import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

import { TopProductResponse } from 'types';
import { parseMoneyValueWithCurrency } from 'utils';

type Props = {
  data: Omit<TopProductResponse, 'id'>;
};

const Card: FC<Props> = ({ data }) => {
  const { thumbnailUrl, name, rating, price } = data;
  const parsedPrice = parseMoneyValueWithCurrency(price);

  return (
    <div className="card border-0">
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
          {Array.from({ length: 5 }).map(() => (
            <AiFillStar />
          ))}
          <span className="text-muted">({rating.total})</span>
        </div>
        <p className="card-title fs-4 fw-bold">{name}</p>
        <p className="text-brand fs-3 fw-bold">{parsedPrice.default}</p>
      </div>
      <button
        type="button"
        className="btn btn-brand text-white block mx-4 py-2 fs-5 fw-bold"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Card;
