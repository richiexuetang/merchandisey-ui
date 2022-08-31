import * as Styled from './Homepage.styles';
import { Container } from '@chakra-ui/react';
import { Navbar } from '../navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductRow } from '../product-row';
import { ImageSlider } from '../image-slider';
import { Footer } from '../footer';

const HomePage = () => {
  return (
    <React.Fragment>
      <Styled.MainSection>
        <Navbar />

        <Container
          w='100%'
          marginInline='auto'
          maxWidth='1296px'
          paddingInline='1rem'
        >
          <ImageSlider />

          <ProductRow />
        </Container>
      </Styled.MainSection>

      <Footer />
      <Outlet />
    </React.Fragment>
  );
};
export default HomePage;
