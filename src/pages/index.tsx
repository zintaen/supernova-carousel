import Carousel from 'components/carousel';

function Homepage() {
  return (
    <div className="container mt-4">
      <h1>Cocoandeve</h1>
      <p>Buy some item for you</p>
      <h2>Top product</h2>
      <Carousel name="top-product" />
    </div>
  );
}

export default Homepage;
