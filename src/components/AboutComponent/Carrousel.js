
import { Carousel } from 'react-bootstrap';
import Me from '../../public/Assets/me4.jpeg'
import Game from '../../public/Assets/game.jpg'
import Music from '../../public/Assets/strokes.jpg'
import Serie from '../../public/Assets/rupture.jpg'
import Image from 'next/image'

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
       <Image src={Me} className="d-block w-100 h-50" />
      </Carousel.Item>
      <Carousel.Item>
      <Image src={Game} className="d-block w-100 h-50" />
      </Carousel.Item>
      <Carousel.Item>
      <Image src={Music} className="d-block w-100 h-50" />
      </Carousel.Item>
      <Carousel.Item>
      <Image src={Serie} className="d-block w-100 h-50" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
