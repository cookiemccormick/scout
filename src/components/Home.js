import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Home = (props) => {
  return (
    <div className='home'>
      <h1>Scout</h1>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/jasmineblandford.jpg"
              alt="Jasmine Blandford"
            />
            <Carousel.Caption>
              <h3>Scout Model Management</h3>
            </Carousel.Caption>
          </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/gioott.jpg"
            alt="Gio Ott"
          />
          <Carousel.Caption>
            <h3>Scout Model Management</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/celestebright.jpg"
            alt="Celeste Bright"
          />
          <Carousel.Caption>
            <h3>Scout Model Management</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;