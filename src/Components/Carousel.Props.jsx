import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselFadeExample({titulo,descricao,imagem}) {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagem}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;