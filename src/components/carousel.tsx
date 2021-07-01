import { FC, useEffect } from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import mockApi from 'mock/top-product';
import Card from './product-card';
import './carousel.scss';

type Props = {
  name: string;
};

const Carousel: FC<Props> = ({ name }) => {
  const location = useLocation();
  const pagename = location.pathname.replace('/', '-');
  const uniqueCarouselId = `carousel${pagename}-${name}`;

  useEffect(() => {
    let items = document.querySelectorAll('.carousel .carousel-item');

    // clone item for each slide without manually (bootstrap 5 doesn't use jQuery)
    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (var i = 0; i < minPerSlide; i++) {
        if (!next) next = items[0];
        let cloneChild: any = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }, []);

  return (
    <div className="row gx-2 mx-auto my-auto justify-content-center">
      <div
        id={uniqueCarouselId}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          {mockApi.map(({ id, ...productData }, index) => (
            <div
              className={cn(
                'carousel-item row flex-nowrap gx-4',
                index === 0 && 'active'
              )}
              key={id}
            >
              <div className="col-md-3">
                <Card data={productData} />
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${uniqueCarouselId}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${uniqueCarouselId}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
