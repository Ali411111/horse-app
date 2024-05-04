import Carousel from 'react-bootstrap/Carousel';

import './CarouselsPart.css'
function CarouselsPart() {
  return (
    <Carousel className='carousel-container'>
      <Carousel.Item className='carousel-items'>
       <img src="/images/horse.06cffeec0cba217b0c75.png" alt="" className='carousels-img'/>
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-items'>
<img src="/images/horse.06cffeec0cba217b0c75.png" alt="" className='carousels-img'/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carousel-items'>
     <img src="/images/horse.06cffeec0cba217b0c75.png" alt="" className='carousels-img'/>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselsPart;