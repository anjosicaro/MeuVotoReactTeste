import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselFadeExample({titulo, texto,imagens}) {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagens}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{titulo}</h3>
          <p>{texto}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagens}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{titulo}</h3>
          <p>{texto}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagens}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{titulo}</h3>
          <p>{texto}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;