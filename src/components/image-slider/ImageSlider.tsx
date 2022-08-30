import { Container, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { imageSlideData } from '../../data/imageSliderData';

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = () => {
  return (
    <Container maxW='1264px'>
      <Carousel>
        {imageSlideData.map((slide, index) => {
          return (
            <Image key={index} src={slide.image} height='auto' width='1264px' />
          );
        })}
      </Carousel>
    </Container>
  );
};

export default ImageSlider;
