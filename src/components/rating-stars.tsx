import { FC } from 'react';
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from 'react-icons/io';

type Props = {
  total: number;
};

const Rating: FC<Props> = ({ total }) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((order) => {
        const isInteger = Number.isInteger(total);
        let renderedHalfStar = false;
        if (order <= total) {
          return <IoIosStar />;
        }
        if (!isInteger && !renderedHalfStar && order > total) {
          renderedHalfStar = true;
          return <IoIosStarHalf />;
        }
        return <IoIosStarOutline />;
      })}
    </>
  );
};

export default Rating;
